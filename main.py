from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def homepage():
    # TODO: (in html) <a href="/predict"> <btn> </a>
    return render_template("index.html")

@app.route("/predict")
def FUN_recognize():
    # TODO: add the implementation here
    # TODO: save image to result.jpg (python)
    # TODO: make result.html (html)
    # example:
    # <html>
    #   <img src="result.jpg"/>
    # </html>
    # TODO: will change to json after use asynchornous javascript use DOM
    return render_template("result.html")

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0")