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