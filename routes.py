from flask import request, jsonify, session, redirect, render_template, Blueprint
from hashPassword import hash_password
from userModel import User, db
from werkzeug.security import check_password_hash

main_bp = Blueprint("main_bp", __name__)

@main_bp.route('/')
def show_index():
    route_name = request.args.get("route", "loginPage.bundle")
    js_file = f"{route_name}.js"
    print(js_file)
    return render_template("index.html", js_file=js_file)

@main_bp.route("/signup", methods=["GET"])
def show_signup_page():
    return render_template('index.html')

@main_bp.route("/signup", methods=["POST", "OPTIONS"])
def handle_signup_process():
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

@main_bp.route("/login", methods=["POST"])
def handle_login_process():
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
                    return redirect("/home")
                else: return "Invalid username or password"
            else: return jsonify(error="Invalid JSON format"), 400
        else: return jsonify(error="Invalid request, JSON data expected"), 400
