from flask import Flask
from flask import render_template
from flask import send_from_directory

import os

from . import smile

def create_app(test_config=None):
    """Create and configure an instance of the Flask application."""
    app = Flask(
        __name__,
        static_url_path="",
        static_folder="static",
    )
    app.config.from_mapping(
        SECRET_KEY=os.urandom(40),
    )

    try:
        open("babsmile.json","x").write("[]")
    except:
        pass

    @app.route("/hello")
    def hello():
        return "Hello, World!"

    @app.route("/favicon.ico")
    def favicon():
        return send_from_directory(
            os.path.join(app.root_path, "static"),
            "favicon.ico",
            mimetype="image/vnd.microsoft.icon",
        )

    app.register_blueprint(smile.bp)

    app.add_url_rule("/", endpoint="index")

    return app
