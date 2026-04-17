"""Request payload models used by the backend endpoints."""

from pydantic import BaseModel

class UserCreateRequest(BaseModel):
    """Payload for registering or logging in a user."""
    username: str
    password: str

class UserLoginRequest(BaseModel):
    """Payload for login requests."""
    username: str
    password: str

class PasswordUpdateRequest(BaseModel):
    """Payload for changing a user's password."""
    old_password: str
    new_password: str

class UserDeleteRequest(BaseModel):
    """Payload for deleting a user account."""
    username: str
    password: str