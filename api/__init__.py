from flask import Flask, request, jsonify
from api.models.user import User
from flask_login import LoginManager
from flask_bcrypt import Bcrypt
import os
import jwt

from dotenv import load_dotenv
load_dotenv('.env')

login_manager = LoginManager()
login_manager.session_protection = "strong"

bcrypt = Bcrypt()

def login_required(f):
    def decorated(*args, **kwargs):
        token = request.headers.get("Authorization")
        if not token:
            return jsonify({'message': "Unathorized"}), 401
        try:
            data = jwt.decode(token.split(" ")[1], os.getenv('SECRET_KEY'), algorithms=['HS256'])
            user = User.query.filter_by(id=data['sub']).first()
            if not user:
                return jsonify({'message': "Unathorized"}), 401
        except Exception as e:
            print(e)
            return jsonify({'message': "Unathorized"}), 401
        return f(user, *args, **kwargs)
    decorated.__name__ = f.__name__
    return decorated

def create_app():
    app = Flask(__name__)
    
    app.config.from_pyfile('config.py')
    
    login_manager.init_app(app)
    bcrypt.init_app(app)
    
    from .models import db
    db.init_app(app)

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)
    
    from .recommend import recommend as recommend_blueprint
    app.register_blueprint(recommend_blueprint)
    
    from .product import product as product_blueprint
    app.register_blueprint(product_blueprint)

    return app