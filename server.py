from flask import Flask, render_template
import random
app = Flask(__name__, template_folder='templates', static_folder='static')

@app.route('/')
def index():
    computer_choice = random.choice(['rock', 'paper', 'scissors'])
    return render_template('index.html', computer_choice=computer_choice)
if __name__ == '__main__':
    app.run(debug=True)
