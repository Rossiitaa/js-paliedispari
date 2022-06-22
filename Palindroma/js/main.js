// creo una variabile col prompt per chiedere all'utente la parola
//creo un'altra variabile, ma stavolta per la parola invertita
// creo una funzione per le due parole e verifico se sono palindrome o no
//creo una funzione per invertire la parola

let normalWord = prompt('Enter here your word to find out if it is palindrome')
let reverseWord = wordReverse(normalWord);

if(normalWord === reverseWord){
    console.log('the word is palindrome');
} else {
    console.log('the word is not palindrome');
}

function wordReverse(word){
let reverseWord = '';

let i = word.length - 1;

while (i >= 0) {
    reverseWord += word[i];

    i--;
}

return reverseWord;
}
