from flask import Blueprint
from flask_cors import cross_origin

dummy_api = Blueprint('dummy_api', __name__)


@dummy_api.route("/hello", methods=['GET'])
@cross_origin()
def hello():
    return "Hello, world!", 200
