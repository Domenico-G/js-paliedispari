// chiedo all'utente un numero da 1 a 5, e di scegliere pario o dispari
var evenOddUser = prompt('Scegli fra pari o dispari');
var userNumb = parseInt(prompt('Inserisci un numero da 1 a 5'));

// creo una funzione per generare un numero
function random(min, max){
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// sommo i due numeri
var somma = userNumb + random(1,5);

// creo una funzione per stabilire se il numero è pari o dispari
function evenOdd(somma){
  if (somma % 2 === 0) {
    return 'pari';
  } else {
    return 'dispari';
  }
}

// confronto i risultati e indico chi ha vinto
if (evenOddUser == evenOdd(somma)) {
  alert('hai vinto')
} else {
  alert('Hai perso')
}
