let operator = '';
let current_number = []; //Current working number
let previous_number =[]; //Previous number to call operate on
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
        result = add(num1, num2);
    } else if (operator == '-') {
        result = subtract(num1, num2);
    } else if (operator == '*') {
        result = multiply(num1, num2);
    } else if (operator == '/') {
        result = divide(num1, num2);
    }
    console.log('result: ' + result)
    return populate(result)
}

function populate(display_value) {
    return screen.textContent = display_value;
}


function buttonPress() {
    button_ids.forEach(button => {
        document.getElementById(button).addEventListener('click', function () { //Listen to key press
            if (document.getElementById(button).className == 'digit') { //If key pressed was digit

                current_number.push(document.getElementById(button).innerHTML); //Add digit to display value number


                if (current_number.length > 1) { //If display number more than one digit
                    populate(current_number.join('')) //Join into number
                } else {
                    populate(current_number) //Else push the digit to screen

                }
                console.log('previous: ' + previous_number)
                console.log('operator: ' + operator);
                console.log("current: " + current_number)
            } else if (document.getElementById(button).className == 'operator') { //If key pressed was an operator
                operator = document.getElementById(button).innerHTML; //Assign pressed button innerHtml operator to variable
                previous_number = current_number //Push current number to previous number
                current_number = [];

                console.log('previous: ' + previous_number)
                console.log('operator: ' + operator);
                console.log("current: " + current_number)


            } else if (document.getElementById(button).className == 'equal_sign') {
                console.log("EQUALS")
                console.log('previous: ' + previous_number)
                console.log('operator: ' + operator);
                console.log("current: " + current_number)
                current_number = operate(+previous_number.join(''), operator, +current_number.join(''))
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