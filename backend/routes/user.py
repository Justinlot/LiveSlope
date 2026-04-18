"""User management routes for account updates and deletion."""

from fastapi import APIRouter, Depends, HTTPException, Request
from sqlalchemy.orm import Session
from utils.auth_session import require_session
from utils.database import get_db
from model.db_models import User
from model.response_models import UserResponse
from model.request_models import PasswordUpdateRequest
from utils.password import hash_password, verify_password

router = APIRouter()

@router.put("/password")
async def update_password(request: Request, body: PasswordUpdateRequest, user_id: int = Depends(require_session), db: Session = Depends(get_db)):
    """Update the password for the authenticated user."""
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="Benutzer nicht gefunden")
    if not verify_password(body.old_password, user.password_hash):
        raise HTTPException(status_code=400, detail="Ungültiges altes Passwort")
    user.password_hash = hash_password(body.new_password)
    db.commit()
    return user


@router.delete("/")
async def delete_account(request: Request, user_id: int = Depends(require_session), db: Session = Depends(get_db)):
    """Delete the authenticated user's account and clear the session."""
    user = db.query(User).filter(User.id == user_id).first()
    if user is None:
        raise HTTPException(status_code=404, detail="Benutzer nicht gefunden")
    db.delete(user)
    db.commit()
    request.session.clear()
    return {"detail": "Account erfolgreich gelöscht"}