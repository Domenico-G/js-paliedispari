// chiedo all'utente un numero da 1 a 5, e di scegliere pario o dispari
// var evenOdd = prompt('Scegli fra pari o dispari');
var userNumb = parseInt(prompt('Inserisci un numero da 1 a 5'));

// creo una funzione per generare un numero
function random(min, max){
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// sommo i due numeri
var somma = userNumb + random(1,5);
