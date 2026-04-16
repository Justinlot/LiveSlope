from pydantic import BaseModel

class UserCreateRequest(BaseModel):
    username: str
    password: str

class UserLoginRequest(BaseModel):
    username: str
    password: str

class PasswordUpdateRequest(BaseModel):
    old_password: str
    new_password: str

class UserDeleteRequest(BaseModel):
    username: str
    password: str