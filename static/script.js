// Funzione per l'ora (già vista)
async function aggiornaOra() {
    const res = await fetch('/ora');
    const json = await res.json();
    document.getElementById('orario').innerText = "Ora del server: " + json.orario;
}

// NUOVA FUNZIONE: Saluto
async function inviaSaluto() {
    // 1. Prendiamo quello che l'utente ha scritto
    const nomeUmano = document.getElementById('input-nome').value;

    if (nomeUmano === "") {
        alert("Ehi, inserisci un nome!");
        return;
    }

    // 2. Chiamiamo il server passando il nome nell'URL (?nome=...)
    const res = await fetch(`/saluta?nome=${nomeUmano}`);
    const json = await res.json();

    // 3. Mostriamo la risposta del server nella pagina
    document.getElementById('risposta-saluto').innerText = json.messaggio;
}
async function calcolasomma() {
    const n1 = document.getElementById('num1').value;
    const n2 = document.getElementById('num2').value;

    if (n1 === "" || n2 === "") {
        alert("Inserisci entrambi i numeri!");
        return;
    }

    const res = await fetch(`/somma?n1=${n1}&n2=${n2}`);
    const json = await res.json();

    document.getElementById('risultato-somma').innerText =  "Risultato: " + json.risultato;
}

async function calcola() {
    const n1 = document.getElementById('num1').value;
    const n2 = document.getElementById('num2').value;
    const op = document.getElementById('operazione').value;

    if (n1 === "" || n2 === "") {
        alert("Inserisci entrambi i numeri!");
        return;
    }

    const res = await fetch(`/calcola?n1=${n1}&n2=${n2}&op=${op}`);
    const json = await res.json();

    document.getElementById('risultato').innerText = "Risultato: " + json.risultato;
}

// collega bottone
document.getElementById('btn-calcola').addEventListener('click', calcola);
// Colleghiamo i bottoni alle funzioni
document.getElementById('btn-ora').addEventListener('click', aggiornaOra);
document.getElementById('btn-saluto').addEventListener('click', inviaSaluto);
document.getElementById('btn-calcolasomma').addEventListener('click', calcolasomma);
