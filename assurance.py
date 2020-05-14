# import flask_login
from flask import Flask, render_template, redirect, url_for, request, flash, session, g,jsonify

app = Flask(__name__)

@app.route('/')
def accueil():

    return render_template('index.html')



####################################  Stimulation ############################

@app.route('/stimulation')
def stimulation():
    
    return render_template('stimulation.html') 





#***********************************************************************************************
if __name__ == '__main__': #si le fichier est executer alors execute le bloc
    app.run(debug=True, port=3000) #debug=True relance le serveur à chaque modification
