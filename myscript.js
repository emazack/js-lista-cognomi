// Chiedi all’utente il cognome, inseriscilo in un array con altri cognomi e stampa la lista ordinata alfabeticamente.
// Scrivi anche la posizione della lista in cui il nuovo utente si trova

// Creazione array con Cognomi
var ListaCognomi;
ListaCognomi = ["Zanetti","Abate","Longo"];

console.log(ListaCognomi)

// Chiedi all'untente il cognome
var CognomeUtente;
CognomeUtente = prompt("Inserisci il tuo Cognome");

console.log(CognomeUtente);

// Inserisci il cognome all'interno della lista
ListaCognomi.push(CognomeUtente);

console.log(ListaCognomi);

// ordina la lista alfabeticamente
ListaCognomi = ListaCognomi.sort();

console.log(ListaCognomi);

// all'interno della lista cerca il nome e la sua posizione
var i;
var PosizioneCognome;
for (var i = 0; i < ListaCognomi.length; i++) {
  if (ListaCognomi[i] == CognomeUtente) {
    PosizioneCognome = i + 1;
  }
}
// stampa la lista
// stampa la posizione del nome

document.getElementById('cognome').innerHTML = "Questa è la lista cognomi " + ListaCognomi + " " + "il tuo cognome è in posizione: " + PosizioneCognome
