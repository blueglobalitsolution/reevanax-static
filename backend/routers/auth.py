from fastapi import APIRouter, HTTPException, Depends, Header
from pydantic import BaseModel, EmailStr
from backend.database import get_db, verify_password, create_session, get_user_from_token

router = APIRouter(prefix="/api/cms", tags=["CMS Authentication"])


class LoginRequest(BaseModel):
    email: str
    password: str


async def get_current_user(authorization: str = Header(None)):
    token = ""
    if authorization:
        if authorization.startswith("Bearer "):
            token = authorization[7:].strip()
        else:
            token = authorization.strip()
    
    if not token:
        raise HTTPException(status_code=401, detail="Authentication required")
    
    user = get_user_from_token(token)
    if not user:
        raise HTTPException(status_code=401, detail="Session expired or invalid")
    return user


@router.post("/login")
async def login(req: LoginRequest):
    email = req.email.strip().lower()
    password = req.password
    if not email or not password:
        raise HTTPException(status_code=400, detail="Email and password are required.")

    conn = get_db()
    user = conn.execute("SELECT * FROM users WHERE email = ?", (email,)).fetchone()
    conn.close()

    if not user or not verify_password(password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid email or password.")

    token = create_session(user["id"])
    return {
        "ok": True,
        "token": token,
        "user": {
            "id": user["id"],
            "email": user["email"],
            "display_name": user["display_name"]
        }
    }


@router.post("/logout")
async def logout(authorization: str = Header(None)):
    token = ""
    if authorization and authorization.startswith("Bearer "):
        token = authorization[7:].strip()
    if token:
        conn = get_db()
        conn.execute("DELETE FROM sessions WHERE token = ?", (token,))
        conn.commit()
        conn.close()
    return {"ok": True}


@router.get("/me")
async def get_me(current_user: dict = Depends(get_current_user)):
    return {"ok": True, "user": current_user}
