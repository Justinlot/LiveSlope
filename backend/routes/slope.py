"""Slope listing routes."""

from fastapi import APIRouter, Depends, Request
from sqlalchemy import text
from sqlalchemy.orm import Session
from utils.database import get_db
from utils.auth_session import require_session
from model.db_models import Slope

router = APIRouter()

@router.get("/")
async def get_slopes(request: Request, min_lat: float, max_lat: float, min_lon: float, max_lon: float, db: Session = Depends(get_db)):
    """Return slopes inside the requested map bounds as GeoJSON features."""
    slopes = db.query(Slope).filter(
        Slope.latitude >= min_lat,
        Slope.latitude <= max_lat,
        Slope.longitude >= min_lon,
        Slope.longitude <= max_lon
    ).all()

    userId = request.session.get("user_id")
    favorite_slopes = set()
    if userId is not None:
        favorite_slopes = set(row[0] for row in db.execute(text("SELECT slope_id FROM favorite WHERE user_id = :user_id"), {"user_id": userId}))

    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "difficulty": slope.difficulty,
                    "coordinates": [slope.longitude, slope.latitude]
                },
                "properties": {
                    "id": slope.id,
                    "osm_id": slope.osm_id,
                    "name": slope.name,
                    "difficulty": slope.difficulty,
                    "favorite": slope.id in favorite_slopes
                }
            }
            for slope in slopes
        ]
    }