#!/usr/bin/env python3
"""
Revanax static site server + booking mailer API.

Serves the static website and accepts POST /api/book to send
appointment emails over SMTP (config in smtp_config.json).

Usage:
  cd /home/satish/project/website/revanax/static
  cp smtp_config.example.json smtp_config.json   # then edit credentials
  python3 server.py
  # open http://127.0.0.1:8080/book-an-appointment/
"""

from __future__ import annotations

import json
import mimetypes
import os
import smtplib
import ssl
import traceback
from email.message import EmailMessage
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlparse
import re
import time
from collections import defaultdict

ROOT = Path(__file__).resolve().parent
CONFIG_PATH = Path(os.environ.get("REVANAX_SMTP_CONFIG", ROOT / "smtp_config.json"))
HOST = os.environ.get("REVANAX_HOST", "0.0.0.0")
PORT = int(os.environ.get("REVANAX_PORT", "8080"))

# Simple in-memory rate limiter for contact form submissions (max 3 requests per 60 seconds per IP)
CONTACT_RATE_LIMITS = defaultdict(list)
RATE_LIMIT_MAX_REQUESTS = 3
RATE_LIMIT_WINDOW = 60


def send_contact_email(contact: dict) -> None:
    cfg = load_smtp_config()
    
    first_name = contact.get("first_name", "").strip()
    last_name = contact.get("last_name", "").strip()
    phone = contact.get("phone", "").strip()
    
    # Input validation / sanitization
    if not first_name or not last_name or not phone:
        raise ValueError("Missing name or phone fields.")
        
    if len(first_name) > 100 or len(last_name) > 100 or len(phone) > 30:
        raise ValueError("Input field length exceeded.")
        
    # Basic regex validation for phone to prevent header injection or spam
    if not re.match(r"^\+?[0-9\s\-()]{5,20}$", phone):
        raise ValueError("Invalid phone format.")
        
    # Phone must contain between 10 and 11 digits
    digits_only = re.sub(r"\D", "", phone)
    if not (10 <= len(digits_only) <= 11):
        raise ValueError("Phone number must be between 10 and 11 digits.")
        
    # Construct email message
    msg = EmailMessage()
    msg["Subject"] = f"New Contact Request from {first_name} {last_name}"
    from_name = cfg.get("from_name") or "ReevanaX Contact Form"
    msg["From"] = f"{from_name} <{cfg['from_email']}>"
    msg["To"] = cfg["to_email"]
    
    lines = [
        "You have received a new contact request from your website.",
        "",
        f"Name: {first_name} {last_name}",
        f"Phone: {phone}",
    ]
    msg.set_content("\n".join(lines))
    
    host = cfg["smtp_host"]
    port = int(cfg["smtp_port"])
    user = cfg["smtp_user"]
    password = cfg["smtp_password"]
    use_tls = bool(cfg.get("smtp_use_tls", True))

    if port == 465:
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(host, port, context=context, timeout=30) as smtp:
            smtp.login(user, password)
            smtp.send_message(msg)
    else:
        with smtplib.SMTP(host, port, timeout=30) as smtp:
            smtp.ehlo()
            if use_tls:
                context = ssl.create_default_context()
                smtp.starttls(context=context)
                smtp.ehlo()
            smtp.login(user, password)
            smtp.send_message(msg)



def load_smtp_config() -> dict:
    if not CONFIG_PATH.exists():
        raise FileNotFoundError(
            f"Missing SMTP config at {CONFIG_PATH}. "
            f"Copy smtp_config.example.json to smtp_config.json and fill in credentials."
        )
    data = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    required = ["smtp_host", "smtp_port", "smtp_user", "smtp_password", "from_email", "to_email"]
    missing = [k for k in required if not data.get(k) and data.get(k) != 0]
    if missing:
        raise ValueError(f"smtp_config.json missing keys: {', '.join(missing)}")
    # Guard against unedited example placeholders
    if str(data.get("smtp_password", "")).startswith("your-"):
        raise ValueError("Update smtp_config.json with real SMTP credentials before sending mail.")
    return data


def build_email(cfg: dict, booking: dict) -> EmailMessage:
    customer = booking.get("customer") or {}
    booking_id = booking.get("id") or "N/A"
    service = booking.get("service") or "Appointment"
    subject = f"New appointment {booking_id} — {service}"

    lines = [
        "New booking received from the ReevanaX website.",
        "",
        f"Booking ID: {booking_id}",
        f"Created: {booking.get('createdAt') or '-'}",
        f"Category: {booking.get('category') or '-'}",
        f"Service: {service}",
        f"Staff: {booking.get('staff') or '-'}",
        f"Date: {booking.get('date') or '-'}",
        f"Time: {booking.get('time') or '-'}",
        f"Price: {booking.get('price') if booking.get('price') is not None else '-'}",
        "",
        "Customer",
        f"  Name: {(customer.get('firstName') or '')} {(customer.get('lastName') or '')}".strip(),
        f"  Phone: {customer.get('phone') or '-'}",
        f"  Email: {customer.get('email') or '-'}",
        f"  Notes: {customer.get('notes') or '-'}",
    ]

    msg = EmailMessage()
    msg["Subject"] = subject
    from_name = cfg.get("from_name") or "ReevanaX Booking"
    msg["From"] = f"{from_name} <{cfg['from_email']}>"
    to_name = cfg.get("to_name") or ""
    msg["To"] = f"{to_name} <{cfg['to_email']}>" if to_name else cfg["to_email"]
    reply_to = customer.get("email")
    if reply_to:
        msg["Reply-To"] = reply_to
    msg.set_content("\n".join(lines))
    return msg


def send_booking_email(booking: dict) -> None:
    cfg = load_smtp_config()
    msg = build_email(cfg, booking)
    host = cfg["smtp_host"]
    port = int(cfg["smtp_port"])
    user = cfg["smtp_user"]
    password = cfg["smtp_password"]
    use_tls = bool(cfg.get("smtp_use_tls", True))

    if port == 465:
        context = ssl.create_default_context()
        with smtplib.SMTP_SSL(host, port, context=context, timeout=30) as smtp:
            smtp.login(user, password)
            smtp.send_message(msg)
    else:
        with smtplib.SMTP(host, port, timeout=30) as smtp:
            smtp.ehlo()
            if use_tls:
                context = ssl.create_default_context()
                smtp.starttls(context=context)
                smtp.ehlo()
            smtp.login(user, password)
            smtp.send_message(msg)


class RevanaxHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path
        
        # If request is specifically for index.html, redirect to the clean directory path
        if path.endswith("index.html"):
            new_path = path[:-10]  # strip "index.html"
            if not new_path:
                new_path = "/"
            if parsed.query:
                new_path += "?" + parsed.query
            self.send_response(HTTPStatus.MOVED_PERMANENTLY)
            self.send_header("Location", new_path)
            self.end_headers()
            return
            
        super().do_GET()

    def end_headers(self):
        # Helpful for local static + API
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

    def _send_json(self, status: int, payload: dict):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self):
        if urlparse(self.path).path in ("/api/book", "/api/contact"):
            self.send_response(HTTPStatus.NO_CONTENT)
            self.send_header("Access-Control-Allow-Origin", "*")
            self.send_header("Access-Control-Allow-Headers", "Content-Type")
            self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
            self.end_headers()
            return
        self.send_error(HTTPStatus.NOT_FOUND)

    def do_POST(self):
        parsed = urlparse(self.path)
        if parsed.path not in ("/api/book", "/api/contact"):
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        client_ip = self.client_address[0]

        # Rate Limit check for /api/contact (max 3 requests per 60 seconds per IP)
        if parsed.path == "/api/contact":
            now = time.time()
            # Clean up old timestamps outside the rate limit window
            CONTACT_RATE_LIMITS[client_ip] = [t for t in CONTACT_RATE_LIMITS[client_ip] if now - t < RATE_LIMIT_WINDOW]
            if len(CONTACT_RATE_LIMITS[client_ip]) >= RATE_LIMIT_MAX_REQUESTS:
                self._send_json(HTTPStatus.TOO_MANY_REQUESTS, {"ok": False, "error": "Too many requests. Please try again later."})
                return
            CONTACT_RATE_LIMITS[client_ip].append(now)

        length = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(length) if length else b"{}"
        try:
            payload = json.loads(raw.decode("utf-8"))
        except Exception:
            self._send_json(HTTPStatus.BAD_REQUEST, {"ok": False, "error": "Invalid JSON body."})
            return

        if parsed.path == "/api/contact":
            # Honeypot check: if the hidden "website" field has content, it's a bot.
            # Silently succeed to trick the bot without sending mail.
            if payload.get("website"):
                self._send_json(HTTPStatus.OK, {"ok": True, "message": "Contact request submitted successfully."})
                return

            try:
                send_contact_email(payload)
            except ValueError as e:
                self._send_json(HTTPStatus.BAD_REQUEST, {"ok": False, "error": str(e)})
                return
            except smtplib.SMTPAuthenticationError:
                self._send_json(
                    HTTPStatus.BAD_GATEWAY,
                    {"ok": False, "error": "SMTP authentication failed. Check smtp_config.json credentials."},
                )
                return
            except Exception as e:
                traceback.print_exc()
                self._send_json(
                    HTTPStatus.BAD_GATEWAY,
                    {"ok": False, "error": f"Failed to send email: {e}"},
                )
                return

            self._send_json(
                HTTPStatus.OK,
                {"ok": True, "message": "Contact request submitted successfully."},
            )
            return

        # Original /api/book flow
        customer = payload.get("customer") or {}
        if not (customer.get("email") or customer.get("phone")):
            self._send_json(
                HTTPStatus.BAD_REQUEST,
                {"ok": False, "error": "Customer email or phone is required."},
            )
            return

        try:
            send_booking_email(payload)
        except FileNotFoundError as e:
            self._send_json(HTTPStatus.SERVICE_UNAVAILABLE, {"ok": False, "error": str(e)})
            return
        except ValueError as e:
            self._send_json(HTTPStatus.SERVICE_UNAVAILABLE, {"ok": False, "error": str(e)})
            return
        except smtplib.SMTPAuthenticationError:
            self._send_json(
                HTTPStatus.BAD_GATEWAY,
                {"ok": False, "error": "SMTP authentication failed. Check smtp_config.json credentials."},
            )
            return
        except Exception as e:
            traceback.print_exc()
            self._send_json(
                HTTPStatus.BAD_GATEWAY,
                {"ok": False, "error": f"Failed to send email: {e}"},
            )
            return

        self._send_json(
            HTTPStatus.OK,
            {"ok": True, "message": "Booking email sent.", "id": payload.get("id")},
        )

    def log_message(self, fmt, *args):
        print("[%s] %s" % (self.log_date_time_string(), fmt % args))


def main():
    # Ensure common static types
    mimetypes.add_type("application/javascript", ".js")
    mimetypes.add_type("text/css", ".css")

    httpd = ThreadingHTTPServer((HOST, PORT), RevanaxHandler)
    print(f"Revanax server running at http://127.0.0.1:{PORT}/")
    print(f"Booking API: POST http://127.0.0.1:{PORT}/api/book")
    print(f"SMTP config: {CONFIG_PATH}")
    if not CONFIG_PATH.exists():
        print("WARNING: smtp_config.json not found — copy smtp_config.example.json first.")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")
        httpd.server_close()


if __name__ == "__main__":
    main()
