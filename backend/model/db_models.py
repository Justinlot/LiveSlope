"""SQLAlchemy models for the LiveSlope database schema."""

from sqlalchemy import Column, ForeignKeyConstraint, Integer, String, Float
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class User(Base):
    """Persisted user record."""
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True)
    password_hash = Column(String)

class Slope(Base):
    """Persisted slope record with location and difficulty data."""
    __tablename__ = "slope"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    osm_id = Column(Integer, unique=True)
    difficulty = Column(String)
    latitude = Column(Float)
    longitude = Column(Float)

class Favorite(Base):
    """Association table that stores a user's favorite slopes."""
    __tablename__ = "favorite"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    slope_id = Column(Integer)
    ForeignKeyConstraint(['user_id'], ['user.id']),
    ForeignKeyConstraint(['slope_id'], ['slope.id'])