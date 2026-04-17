"""Password hashing and verification helpers."""

import bcrypt

def hash_password(password: str) -> str:
    """Hash a plain-text password using bcrypt."""
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed.decode('utf-8')

def verify_password(password: str, hashed: str) -> bool:
    """Check whether a plain-text password matches a stored hash."""
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))