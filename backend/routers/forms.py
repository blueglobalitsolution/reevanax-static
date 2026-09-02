import re
import uuid
from datetime import datetime
from typing import Optional
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

from backend.database import get_db, send_notification_email

router = APIRouter(prefix="/api", tags=["Website Booking & Inquiries"])


class BookingRequest(BaseModel):
    name: str
    phone: str
    email: Optional[str] = ""
    service: Optional[str] = "General Consultation"
    date: Optional[str] = ""
    time: Optional[str] = ""
    notes: Optional[str] = ""


class ContactRequest(BaseModel):
    first_name: str
    last_name: str
    phone: str
    email: Optional[str] = ""
    message: Optional[str] = ""


@router.post("/book")
async def book_appointment(req: BookingRequest):
    name = req.name.strip()
    phone = req.phone.strip()
    if not name or not phone:
        raise HTTPException(status_code=400, detail="Name and phone number are required.")

    booking_id = f"BK-{uuid.uuid4().hex[:8].upper()}"
    
    # Send email notification if configured
    subject = f"[Booking] New Appointment: {name} ({req.service})"
    body = f"""New Consultation Booking Received:

Booking ID: {booking_id}
Patient Name: {name}
Phone Number: {phone}
Email: {req.email}
Requested Service: {req.service}
Preferred Date: {req.date} {req.time}
Notes: {req.notes}
Submission Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
"""
    send_notification_email(subject, body)

    return {
        "ok": True,
        "booking_id": booking_id,
        "message": "Your consultation request has been received. Our clinical coordinator will contact you shortly to confirm."
    }


@router.post("/contact")
async def contact_inquiry(req: ContactRequest):
    first = req.first_name.strip()
    last = req.last_name.strip()
    phone = req.phone.strip()
    if not first or not last or not phone:
        raise HTTPException(status_code=400, detail="First name, last name, and phone number are required.")

    inquiry_id = f"INQ-{uuid.uuid4().hex[:8].upper()}"
    
    subject = f"[Inquiry] New Contact Form Submission from {first} {last}"
    body = f"""New Contact Form Submission:

Inquiry ID: {inquiry_id}
Name: {first} {last}
Phone: {phone}
Email: {req.email}
Message: {req.message}
Submission Time: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
"""
    send_notification_email(subject, body)

    return {
        "ok": True,
        "inquiry_id": inquiry_id,
        "message": "Thank you for reaching out. We will get back to you promptly."
    }
