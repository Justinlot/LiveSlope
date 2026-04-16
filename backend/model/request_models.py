from pydantic import BaseModel

class UserCreateRequest(BaseModel):
    username: str
    password: str

class UserLoginRequest(BaseModel):
    username: str
    password: str

class PasswordUpdateRequest(BaseModel):
    username: str
    old_password: str
    new_password: str

class UserDeleteRequest(BaseModel):
    username: str
    password: str