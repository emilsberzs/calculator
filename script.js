let stored_value = ''; //Stored value of previous number or result
let display_value = ''; //Initialize display value
let operator = '' //Initialize operator
let operators = document.querySelectorAll('.operator') //Initialize operators
let digit = document.querySelectorAll('.digit'); //Initialize digit buttons
let screen = document.getElementById('screen') //Initialize calculator screen
let equal_sign = document.getElementById('equals') //Initialize equal sign
let backspace = document.getElementById('delete') //Initialize backspace
let clear_all = document.getElementById('clear')// Initialize clear all


function add(a, b) {
    return Math.round((a + b) * 100) / 100;
}

function subtract(a, b) {
    return Math.round((a - b) * 100) / 100;
}

function multiply(a, b) {
    return Math.round((a * b) * 100) / 100;
}

function divide(a, b) {
    return Math.round((a / b) * 100) / 100;
}

function operate(a, o, b) {
    if (o == '+') {
        return add(+a, +b);
    } else if (o == '-') {
        return subtract(+a, +b);
    } else if (o == '*') {
        return multiply(+a, +b)
    } else if (o == '/') {
        return divide(+a, +b);
    }
}

function refreshScreen() {
    screen.textContent = display_value;
}

//Upon pressing digit, add it to display value, and populate screen
for (let i = 0; i < digit.length; i++) {
    digit[i].addEventListener('click', function () {
        display_value += digit[i].innerHTML;
        refreshScreen()
    });
}

//Upon pressing operator button assign it to operator variable
for (let i = 0; i < operators.length; i++) {
    operators[i].addEventListener('click', function () {


        operator = operators[i].innerHTML;
        stored_value = display_value;
        display_value = '';
        refreshScreen();

    });
}

//Upon pressing '=' call operate with stored_value, operator and display_value
equal_sign.addEventListener('click', function () {
    display_value = operate(stored_value, operator, display_value)
    refreshScreen();
})

//Backspace removes last entered digit from display_value variable
backspace.addEventListener('click', function () {
    display_value = display_value.slice(0, -1);
    console.log(display_value);
    refreshScreen()
})

//Clear removes all variables
clear_all.addEventListener('click', function () {
    display_value = '';
    stored_value = '';
    operator = '';
    refreshScreen();
})

console.log('operator: ' + operator)
console.log('display value: ' + display_value)
console.log('stored value: ' + stored_value)