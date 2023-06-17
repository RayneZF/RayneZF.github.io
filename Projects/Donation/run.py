from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/<string:file>")
def html_file(file):
    return render_template(f"htmls/{file}")

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        if username == "admin" and password == "123456":
            return render_template("success.html")
        return render_template("failed.html")
    return render_template("login.html", err="Login Failed, Please try again!")
    # return render_template("login.html")

@app.route("/auth", methods=["GET", "POST"])
def auth():

    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        if username == "admin" and password == "123456":
            return render_template("success.html")
        return render_template("failed.html")
    return render_template("login.html", err="Login Failed, Please try again!")

@app.route("/register", methods=["GET", "POST"])
def register():
     
    return render_template("register.html")
    

if __name__ == "__main__":
    app.run(debug=True)

if __name__ == "__main__":
    app.run(debug=True) #host="0.0.0.0", port=8000