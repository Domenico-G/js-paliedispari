// chiedo all'utente di inserire una frase
  var word = prompt('inserisci una parola');

// creo una funzione che confronta la parola dell'utente con la stessa parola inverssa
 function pali(word) {
   var newWord = '';
   for (var i = 0; i < word.length; i++) { //ciclo la parola
    newWord += word.split('').reverse()[i]; // creo un arrai con le lettere e le inverto
   }
   // confronto le parole
   if (newWord === word) {
     return true
   } else {
     return false
   }
 }

// stampo il risultato del confronto
 if (pali(word)) {
   alert('la parola inserita è palindroma')
 } else {
   alert('la parola inserita non è palindroma')
 }
