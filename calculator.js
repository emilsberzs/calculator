let display_value = '3 + 3';
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
        return divide(num1, num2)
    } else {
        //
    }
}

function populate(display_value) {
    return screen.textContent = display_value;
}


function buttonPress()  {
    button_ids.forEach(button => {
        document.getElementById(button).addEventListener('click', function (){populate(button)});
        display_value = button
        console.log(button);
    })
}

buttonPress()
