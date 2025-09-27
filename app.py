from flask import Flask, render_template

app = Flask(__name__)

# Route for home page
@app.route('/')
def home():
    return render_template('index.html')  # Renders index.html from templates folder

# Route for about page
@app.route('/about')
def about():
    return render_template('about.html')  # Renders about.html from templates folder

# Add more routes as needed
@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/service')
def service():
    return render_template('services.html')

@app.route('/rig-acceptance')
def rig_acceptance():
    return render_template('rig_acceptance.html')

@app.route('/bop-inspection')
def bop_inspection():
    return render_template('bop_inspection.html')

@app.route('/consulting-services')
def consulting_services():
    return render_template('consulting_services.html')

@app.route('/drops-inspection')
def drops_inspection():
    return render_template('drops_inspection.html')

@app.route('/inspection')
def inspection():
    return render_template('inspection.html')

@app.route('/lifting-inspection')
def lifting_inspection():
    return render_template('lifting_inspection.html')

@app.route('/training-program')
def training_programs():
    return render_template('training_programs.html')


if __name__ == '__main__':
    app.run(debug=True)