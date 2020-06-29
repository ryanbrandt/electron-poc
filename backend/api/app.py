from flask import Flask
from flask_cors import CORS

from dummy_api import dummy_api

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

app.register_blueprint(dummy_api)

if __name__ == "__main__":
    app.run()
