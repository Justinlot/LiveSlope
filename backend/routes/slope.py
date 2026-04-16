from fastapi import APIRouter, Depends
from sqlalchemy import text
from sqlalchemy.orm import Session
from utils.database import get_db
from model.db_models import Slope

router = APIRouter()

@router.get("/")
async def get_slopes(min_lat: float, max_lat: float, min_lon: float, max_lon: float, db: Session = Depends(get_db)):
    slopes = db.query(Slope).filter(
        Slope.latitude >= min_lat,
        Slope.latitude <= max_lat,
        Slope.longitude >= min_lon,
        Slope.longitude <= max_lon
    ).all()
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
                    "difficulty": slope.difficulty
                }
            }
            for slope in slopes
        ]
    }