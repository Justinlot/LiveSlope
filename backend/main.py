from fastapi import FastAPI, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session
from utils.database import get_db


app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/db")
async def test_db(db: Session = Depends(get_db)):
    result = db.execute(text("SELECT 1")).fetchone()
    if result is None:
        return {"message": "Database connection failed"}
    return {"message": "Database connection successful"}