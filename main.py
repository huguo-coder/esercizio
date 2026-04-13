from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from datetime import datetime

app = FastAPI()

# Serve per rendere accessibili CSS e JS
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def home():
    return FileResponse('static/home.html')

@app.get("/ora")
def dammi_ora():
    return {"orario": datetime.now().strftime("%H:%M:%S")}

# NUOVO: Endpoint con parametro di query
@app.get("/saluta")
def saluta_utente(nome: str):
    return {"messaggio": f"Ciao {nome}, benvenuto nel server di Terza!"}
@app.get("/somma")
def calcola_somma(n1: float, n2: float):
    risultato = n1 + n2
    return {"risultato": risultato}
    import random

