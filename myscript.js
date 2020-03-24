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

// stampa la lista non ordinata
document.getElementById('nonordinata').innerHTML = "Questa è la lista cognomi NON ordinata " + ListaCognomi;

// ordina la lista alfabeticamente
var SortedListaCognomi = ListaCognomi.sort();

console.log(SortedListaCognomi);
console.log(ListaCognomi);

// all'interno della lista cerca il nome e la sua posizione
var i;
var PosizioneCognome;
for (var i = 0; i < SortedListaCognomi.length; i++) {
  if (SortedListaCognomi[i] == CognomeUtente) {
    PosizioneCognome = i + 1;
  }
}
// stampa la lista ordinata
// stampa la posizione del nome

document.getElementById('cognome').innerHTML = "Questa è la lista cognomi ordinata" + SortedListaCognomi + " ed il tuo cognome è in posizione: " + PosizioneCognome;
