from sqlalchemy import Column, BigInteger, Integer, String, Float
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Slope(Base):
    __tablename__ = "slope"

    id = Column(Integer, primary_key=True)
    osm_id = Column(BigInteger, unique=True, nullable=False)
    name = Column(String)
    difficulty = Column(String)
    latitude = Column(Float)
    longitude = Column(Float)