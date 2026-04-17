from fastapi import Depends, Request, HTTPException
from datetime import datetime, timezone
from model.db_models import User
from sqlalchemy.orm import Session
from utils.database import get_db

def require_session(request: Request, db: Session = Depends(get_db)) -> int:
    user_id = request.session.get("user_id")
    expires_at = request.session.get("expires_at")

    if not user_id or not expires_at:
        raise HTTPException(401)
    
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        request.session.clear()
        raise HTTPException(401)

    if datetime.now(tz=timezone.utc) > datetime.fromisoformat(expires_at):
        request.session.clear()
        raise HTTPException(401)

    return user_id