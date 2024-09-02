var screen = document.getElementById('screen');
var buttons = document.querySelectorAll('button');
var currentInput = '';
var operator = '';
var previousInput = '';

function add(a, b) {
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

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return b;
    }
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        var value = this.value;

        if (value === '+' || value === '-' || value === '*' || value === '/') {
            operator = value;
            previousInput = currentInput;
            currentInput = '';
        } else if (value === '=') {
            currentInput = operate(parseFloat(previousInput), parseFloat(currentInput), operator);
            screen.value = currentInput;
            operator = '';
            previousInput = '';
        } else if (value === 'all-clear') {
            currentInput = '';
            operator = '';
            previousInput = '';
            screen.value = '';
        } else {
            currentInput += value;
            screen.value = currentInput;
        }
    };
}
