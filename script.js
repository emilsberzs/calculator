function add(a ,b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate (a, o, b) {
    if (o == '+') {
        return add(a,b);
    } else if (o == '-') {
        return divide(a,b);
    } else if (o == '*') {
        return multiply(a,b)
    } else if (o == '/') {
        return divide(a,b);
    }
}

