"""Application entry point for the LiveSlope backend.

This module creates the FastAPI app, registers routers, and exposes a small
health check plus a database connectivity endpoint.
"""

from fastapi import FastAPI, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session
from utils.database import get_db
from starlette.middleware.sessions import SessionMiddleware
from routes import auth, user, slope, favorites


app = FastAPI()
app.include_router(auth.router, prefix="/auth", tags=["auth"])
app.include_router(user.router, prefix="/user", tags=["user"])
app.include_router(slope.router, prefix="/slopes", tags=["slopes"])
app.include_router(favorites.router, prefix="/favorites", tags=["favorites"])

app.add_middleware(
    SessionMiddleware,
    secret_key="SECRET",
    max_age=60 * 60 * 24, # 1 day
    https_only=False,
    same_site="lax"
)


@app.get("/")
async def root():
    """Return a simple health message for the API root."""
    return {"message": "Hello World"}

@app.get("/db")
async def test_db(db: Session = Depends(get_db)):
    """Verify that the application can execute a trivial database query."""
    result = db.execute(text("SELECT 1")).fetchone()
    if result is None:
        return {"message": "Database connection failed"}
    return {"message": "Database connection successful"}