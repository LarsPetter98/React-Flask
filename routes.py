from flask import Flask, request, jsonify, session, redirect, render_template, url_for
from flask_cors import CORS
from hashPassword import hash_password
from userModel import User, db
from werkzeug.security import check_password_hash
from datetime import timedelta
import secrets
import os

app = Flask(__name__)
CORS(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users.db"
db.init_app(app)
app.secret_key = secrets.token_hex(16)
app.permanent_session_lifetime = timedelta(days=3)
basedir = os.path.abspath(os.path.dirname(__file__))

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/signup", methods=["POST", "OPTIONS"])
def signup():
    if request.method == "OPTIONS":
        headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers": "Content-Type"
        }
        return ("", 204, headers)
    
    if request.is_json:
        data = request.get_json()
        if "email" in data and "password" in data:
            email = data["email"]
            password = data["password"]
            hashed_password = hash_password(password)
            new_user = User(
                email = email,
                hashed_password = hashed_password
            )
            print(new_user)
            db.create_all()
            db.session.add(new_user)
            db.session.commit()
            return jsonify(message="New user created!"), 200
        else: return jsonify(error="Invalid JSON format"), 400
    else: return jsonify(error="Invalid request, JSON data expected"), 400

@app.route("/login", methods=["POST"])
def login():
    if request.method == "POST":
        if request.is_json:
            data = request.get_json()
            if("email" in data and "password" in data):
                email = data["email"]
                password = data["password"]
                user = User.query.filter_by(email = email).first()
                if user and check_password_hash(user.hashed_password, password):
                    session["user_id"] = user.id #We store the user in the session object, which means the server and the browser remember the user is logged in
                    print("user is logged in")
                    print(session)
                    return redirect("http://localhost:5173/home")
                else: return "Invalid username or password"
            else: return jsonify(error="Invalid JSON format"), 400
        else: return jsonify(error="Invalid request, JSON data expected"), 400