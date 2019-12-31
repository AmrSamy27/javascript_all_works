const userInput = prompt('enter a string');
let vowels ='aeoui'
let count = 0;
for (let i = 0; i < userInput.length; i++) {

    (vowels.indexOf(userInput[i].toLocaleLowerCase()) > -1) ? count++ : null;

}
confirm(count);