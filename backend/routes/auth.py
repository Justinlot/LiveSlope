from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from utils.auth_session import require_session
from model.request_models import UserCreateRequest
from utils.database import get_db
from model.db_models import User
from model.response_models import UserResponse
from utils.password import hash_password, verify_password
from datetime import datetime, timedelta, timezone

router = APIRouter()

@router.post("/register", response_model=UserResponse)
async def register(request: Request, body: UserCreateRequest, db: Session = Depends(get_db)):
    password = body.password
    hashed_password = hash_password(password)
    existing_user = db.query(User).filter(User.username == body.username).first()
    if existing_user is not None:
        raise HTTPException(status_code=400, detail="Username already exists")
    user = User(username=body.username, password_hash=hashed_password)
    db.add(user)
    db.commit()
    db.refresh(user)
    request.session["user_id"] = user.id
    request.session["expires_at"] = (datetime.now(tz=timezone.utc) + timedelta(days=1)).isoformat()
    return user


@router.post("/login", response_model=UserResponse)
async def login(request: Request, body: UserCreateRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == body.username).first()
    if user is None:
        raise HTTPException(status_code=400, detail="Invalid username or password")
    if not verify_password(body.password, user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid username or password")
    request.session["user_id"] = user.id
    request.session["expires_at"] = (datetime.now(tz=timezone.utc) + timedelta(days=1)).isoformat()
    return user

@router.post("/logout")
async def logout(request: Request):
    request.session.clear()
    return {"message": "Logged out successfully"}

@router.get("/me", response_model=UserResponse)
async def get_current_user(request: Request, user_id: int = Depends(require_session), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user