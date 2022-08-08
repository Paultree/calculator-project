// math operators //
function plus(a,b) {
    return a + b;
}

function minus(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a/b;
}

// simple calculation function //
function operate(a, operator, b) {
    return operator(a,b);
}

function updateDisplay () {
    display.textContent = '';
}

let values = {
    a: 'string',
    b: 'string',
    plus: plus,
    minus: minus,
    multiply: multiply,
    divide: divide,
}

const numArr = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    decimal: '.',
}

// Simple number pressing function //
const numbers = document.querySelector('#numbers');
const display = document.querySelector('.calculator-display');

numbers.addEventListener('click', (e) => {
    if (e.target.id == 'numbers' || e.target.id == 'clear') {
        return;
    } else if (typeof values['a'] === 'number' && values['b'] === '') {
        updateDisplay();
        display.textContent += numArr[`${e.target.id}`];
        values['b'] = display.textContent;
    } else {
        display.textContent += numArr[`${e.target.id}`];
    }
});
        

// clear button //
const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    display.textContent = '';
    values['a'] = '';
    values['b'] = '';
})

const operators = document.querySelector('#operators');

let op;

operators.addEventListener('click', (e) => {
    if (e.target.id == 'operators' || e.target.id == 'equal') {
        return;
    } else if (typeof values['a'] === 'string') {
        values['a'] = Number(display.textContent);
        op = values[`${e.target.id}`]
        updateDisplay();
    } else if (typeof values['a'] === 'number') {
        values['b'] = Number(display.textContent);
        let result = operate(values['a'], op, values['b']);
        display.textContent = result;
        values['a'] = result;
        values['b'] = '';
        op = values[`${e.target.id}`];
    }
})

 const equal = document.querySelector('#equal') 

 equal.addEventListener('click', () => {
    values['b'] = Number(display.textContent);
        let result = operate(values['a'], op, values['b']);
        display.textContent = result;
 })

