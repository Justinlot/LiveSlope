from fastapi import Request, HTTPException
from datetime import datetime, timezone

def require_session(request: Request):
    user_id = request.session.get("user_id")
    expires_at = request.session.get("expires_at")

    if not user_id or not expires_at:
        raise HTTPException(401)

    if datetime.now(tz=timezone.utc) > datetime.fromisoformat(expires_at):
        request.session.clear()
        raise HTTPException(401)

    return user_id