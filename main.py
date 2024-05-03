from flask import Flask
from flask_cors import CORS
import secrets
import os
from datetime import timedelta
from userModel import db
from routes import main_bp

app = Flask(__name__)

print(app.static_folder)  # Check the static folder path

CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
db.init_app(app)

app.register_blueprint(main_bp)

app.secret_key = secrets.token_hex(16)
app.permanent_session_lifetime = timedelta(days=3)

if __name__ == "__main__":
    app.run(debug=True)
