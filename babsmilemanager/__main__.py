import webbrowser

from . import create_app

app = create_app()
webbrowser.open("http://127.0.0.1:5000")
app.run()
