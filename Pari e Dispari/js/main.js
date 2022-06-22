// variabili utente
const userChoice = prompt('Choose between odd or even');
if (userChoice === 'even') {
    console.log('even');
} else if (userChoice === 'odd'){
    console.log('odd');
} else {
    console.log('write the value correctly');
}

const userNumber = parseInt(prompt('Choose a number from 1 to 5'));
if (userNumber < 1 || userNumber > 5) {
    console.log('Unrecognized value, enter a value from 1 to 5');
} else if (isNaN(userNumber)) {
    console.log('enter only numbers');
} else {
    console.log(userNumber);
}

// variabile computer
const pcNumber = randomNumber(1 , 5);
console.log(pcNumber);

// variabile che sommi i due risultati
let sum = userNumber + pcNumber;
console.log(sum);

// variabile per determina se è pari o dispari
const variableOddOrEven = oddOrEven (sum);
if (variableOddOrEven % 2 == 0) {
    
    console.log('Whoever has chosen even has won');

} else if (variableOddOrEven % 2 !== 0){

    console.log('Whoever chose odd won');

}