let operator = '';
let current_number = ['']; //Current working number
let previous_number = ['']; //Previous number to call operate on
const screen = document.getElementById('screen');
const button_ids = ['7', '8', '9', 'divide', '4', '5', '6',
    'multiply', '1', '2', '3', 'subtract', 'point', '0', 'equals', 'add', 'clear', 'delete']


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
        result = add(num1, num2);
    } else if (operator == '-') {
        result = subtract(num1, num2);
    } else if (operator == '*') {
        result = multiply(num1, num2);
    } else if (operator == '/') {
        result = divide(num1, num2);
    }
    return populate(result)
}

function populate(display_value) {
    return screen.textContent = display_value;
}


function buttonPress() {
    button_ids.forEach(button => {
        document.getElementById(button).addEventListener('click', function () { //Listen to key press
            if (document.getElementById(button).className == 'digit') { //If key pressed was digit
                console.log(typeof (current_number))
                if (typeof (current_number == 'object')) {
                    current_number.push(document.getElementById(button).innerHTML); //Add digit to display value number array
                } else if (typeof (current_number == 'number')) {
                    current_number += document.getElementById(button).innerHTML; //Concat next digit to number
                }
                if (current_number.length > 1) { //If display number more than one digit
                    populate(current_number.join('')) //Join array into number
                } else {
                    populate(current_number) //Else push the digit to screen
                }
                console.log('previous at digit:' + previous_number);
                console.log('operator at digit: ' + operator);
                console.log('current at digit: ' + current_number);



            } else if (document.getElementById(button).className == 'operator') { //If key pressed was an operator
                if (previous_number.length >= 1 && operator != '') {

                    current_number = operate(+previous_number.join(''), operator, +current_number.join(''))
                    //previous_number = current_number;
                } else {

                    operator = document.getElementById(button).innerHTML; //Assign pressed button innerHtml operator to variable
                    previous_number = current_number //Push current number to previous number
                    current_number = [];
                }
                console.log('previous at operator:' + previous_number);
                console.log('operator at operator: ' + operator);
                console.log('current at operator: ' + current_number);



            } else if (document.getElementById(button).className == 'equal_sign') {
                if (previous_number.length > 1) {
                    previous_number = previous_number.join('')
                }
                if (current_number.length > 1) {
                    current_number = current_number.join('')
                }
                current_number = operate(+previous_number, operator, +current_number)
                previous_number = current_number;
                current_number = [];
                console.log('previous at equal:' + previous_number);
                console.log('operator at operator: ' + operator);
                console.log('current at equal: ' + current_number);

            } else if (document.getElementById(button).className == 'clear_all') {
                current_number = [];
                previous_number = [];
                operator = '';
                populate(current_number)

            } else if (document.getElementById(button).className == 'backspace') {
                current_number.pop()
                populate(current_number.join(''))
            }
        });
    })
}

buttonPress()