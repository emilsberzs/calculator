let operator = '';
let current_number = []; //Current working number
let previous_number = [] //Previous number to call operate on
let result = ''; //Stores the result of calculation
const screen = document.getElementById('screen');
const button_ids = ['7', '8', '9', 'divide', '4', '5', '6',
    'multiply', '1', '2', '3', 'subtract', 'point', '0', 'equals', 'add']


function add(a, b) {
    return a + b;

};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(num1, operator, num2) {
    if (operator == '+') {
        return add(num1, num2);
    } else if (operator == '-') {
        return subtract(num1, num2);
    } else if (operator == '*') {
        return multiply(num1, num2);
    } else if (operator == '/') {
        return divide(num1, num2);
    } else {
        //
    }
}

function populate(display_value) {
    return screen.textContent = display_value;
}


function buttonPress() {
    button_ids.forEach(button => {
        document.getElementById(button).addEventListener('click', function () { //Listen to key press
            if (document.getElementById(button).className == 'digit') { //If key pressed was digit
                console.log('digit')
                current_number.push(document.getElementById(button).innerHTML); //Add digit to display value number
                console.log(current_number)

                if (current_number.length > 1) { //If display number more than one digit
                    populate(current_number.join('')) //Join into number
                } else {
                    populate(current_number) //Else push the digit to screen

                }
            } else if (document.getElementById(button).className == 'operator') { //If key pressed was an operator
                    operator = document.getElementById(button).innerHTML; //Assign pressed button innerHtml operator to variable
                    console.log(operator)
                    previous_number = current_number.join('') //
                    console.log(previous_number)
                    current_number = [];
                    console.log(current_number)
            }
        });
    })
}

function calculate() {
    if (current_number.length >= 3) {
        //console.log(operate(+display_value.at(-3),display_value.at(-2),+display_value.at(-1)));
        result += operate(+current_number.at(-3), current_number.at(-2), +current_number.at(-1))
        return result;
    }
    current_number.push(result)
}

buttonPress()
console.log(current_number)
