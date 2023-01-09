let display_value = ['36','*','4'];
const screen = document.getElementById('screen');
const button_ids = ['7', '8', '9', 'divide', '4', '5', '6',
    'multiply', '1', '2', '3', 'subtract', 'point', '0', 'equals', 'add']


function add(a, b) {
    console.log(a+b)
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
        document.getElementById(button).addEventListener('click', function () {
            populate(document.getElementById(button).innerHTML)
            display_value.push(document.getElementById(button).innerHTML);
            console.log(display_value)
        });
    })
}

function calculate() {
    if (display_value.length >= 3) {
        console.log(display_value.at(-3))
        console.log(display_value.at(-2))
        console.log(display_value.at(-1))
        console.log(operate(+display_value.at(-3),display_value.at(-2),+display_value.at(-1)));
        return operate(+display_value.at(-3),display_value.at(-2),+display_value.at(-1));
    }
}

buttonPress()
calculate()
