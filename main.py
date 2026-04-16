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
@app.get("/calcola")
def calcola(n1: float, n2: float, op: str):
    if op == "add":
        risultato = n1 + n2
    elif op == "sub":
        risultato = n1 - n2
    elif op == "mul":
        risultato = n1 * n2
    elif op == "div":
        if n2 == 0:
            return {"risultato": "Errore: divisione per zero"}
        risultato = n1 / n2
    else:
        return {"risultato": "Operazione non valida"}

    return {"risultato": risultato}
