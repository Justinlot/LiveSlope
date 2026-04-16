from sqlalchemy import Column, ForeignKeyConstraint, Integer, String, Date, Float
from sqlalchemy.orm import declarative_base

Base = declarative_base()

class User(Base):
    __tablename__ = "user"

    id = Column(Integer, primary_key=True)
    username = Column(String)
    password_hash = Column(String)
    created_at = Column(Date)

class Slope(Base):
    __tablename__ = "slope"

    id = Column(Integer, primary_key=True)
    name = Column(String)
    difficulty = Column(String)
    latitude = Column(Float)
    longitude = Column(Float)
    created_at = Column(Date)

class Favorite(Base):
    __tablename__ = "favorite"

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer)
    slope_id = Column(Integer)
    created_at = Column(Date)
    ForeignKeyConstraint(['user_id'], ['user.id']),
    ForeignKeyConstraint(['slope_id'], ['slope.id'])