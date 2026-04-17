"""Response schemas returned by the backend APIs."""

from pydantic import BaseModel

class UserResponse(BaseModel):
    """Public user data returned to clients."""
    id: int
    username: str


class SlopeResponse(BaseModel):
    """Public slope data returned by favorites endpoints."""
    id: int
    name: str
    difficulty: str
    latitude: float
    longitude: float

