from fastapi import FastAPI, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session
from utils.database import get_db
from starlette.middleware.sessions import SessionMiddleware
from routes import auth


app = FastAPI()
app.include_router(auth.router, prefix="/auth", tags=["auth"])

app.add_middleware(
    SessionMiddleware,
    secret_key="SECRET",
    max_age=60 * 60 * 24, # 1 day
    https_only=False,
    same_site="lax"
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/db")
async def test_db(db: Session = Depends(get_db)):
    result = db.execute(text("SELECT 1")).fetchone()
    if result is None:
        return {"message": "Database connection failed"}
    return {"message": "Database connection successful"}