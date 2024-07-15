let display = document.getElementById('result');
let currentInput = '';
let currentOperation = null;
let previousInput = '';

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    currentOperation = null;
    display.innerText = '0';
}

function appendNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput += number;
    display.innerText = currentInput;
}

function deleteNumber() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}

function chooseOperation(operation) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    currentOperation = operation;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentInput = computation.toString();
    currentOperation = null;
    previousInput = '';
    display.innerText = currentInput;
}
