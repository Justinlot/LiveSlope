from fastapi import APIRouter, Depends, HTTPException
from utils.database import get_db
from utils.auth_session import require_session
from sqlalchemy import text
from sqlalchemy.orm import Session
from model.db_models import Slope
from model.response_models import SlopeResponse

router = APIRouter()

@router.get("/", response_model=list[SlopeResponse])
async def get_favorites(user_id: int = Depends(require_session), db: Session = Depends(get_db)):
    result = db.execute(text("SELECT slope_id FROM favorite WHERE user_id = :user_id"), {"user_id": user_id})
    slope_ids = [row[0] for row in result.fetchall()]
    slopes = db.query(Slope).filter(Slope.id.in_(slope_ids)).all()
    return [SlopeResponse.from_orm(slope) for slope in slopes]

@router.post("/{slope_id}", response_model=SlopeResponse)
async def add_favorite(slope_id: int, user_id: int = Depends(require_session), db: Session = Depends(get_db)):
    slope = db.query(Slope).filter(Slope.id == slope_id).first()
    if not slope:
        raise HTTPException(404, "Slope not found")
    db.execute(text("INSERT INTO favorite (user_id, slope_id) VALUES (:user_id, :slope_id)"), {"user_id": user_id, "slope_id": slope_id})
    db.commit()
    return slope

@router.delete("/{slope_id}")
async def remove_favorite(slope_id: int, user_id: int = Depends(require_session), db: Session = Depends(get_db)):
    slope = db.query(Slope).filter(Slope.id == slope_id).first()
    if not slope:
        raise HTTPException(404, "Slope not found")
    db.execute(text("DELETE FROM favorite WHERE user_id = :user_id AND slope_id = :slope_id"), {"user_id": user_id, "slope_id": slope_id})
    db.commit()
    return {"message": "Favorite removed"}