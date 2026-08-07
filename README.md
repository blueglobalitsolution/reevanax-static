# Revanax Static Website

Fully portable static export — no WordPress runtime or WordPress folder names.

## Path

`/home/satish/project/website/revanax/static`

## Structure

```
static/
  index.html
  assets/
    uploads/     # images & media
    themes/      # theme CSS/JS
    plugins/     # plugin front-end assets
    lib/         # shared JS/CSS libraries
    cache/       # minified/critical CSS cache
  about-us/index.html
  ...
```

## Preview

```bash
cd /home/satish/project/website/revanax/static
python3 -m http.server 8080
```

## Run with booking email (SMTP)

1. Configure SMTP:

```bash
cd /home/satish/project/website/revanax/static
cp smtp_config.example.json smtp_config.json
# edit smtp_config.json with your SMTP host/user/password
```

2. Start the Python server (serves the site + `/api/book`):

```bash
python3 server.py
```

3. Open `http://127.0.0.1:8080/book-an-appointment/`

Confirm Booking sends the appointment email to `to_email` via SMTP (no mail compose window).

For Gmail, use an [App Password](https://myaccount.google.com/apppasswords) with `smtp.gmail.com` port `587`.
