from pydantic import BaseModel

class UserResponse(BaseModel):
    id: int
    username: str


class SlopeResponse(BaseModel):
    id: int
    name: str
    difficulty: str
    latitude: float
    longitude: float

