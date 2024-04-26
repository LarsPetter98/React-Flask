from werkzeug.security import generate_password_hash

def hash_password(password):
    hashed_password = generate_password_hash(password)
    return hashed_password