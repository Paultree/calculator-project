// math operators //
function add(a,b) {
    result += a + b;
    return result;
}

function subtract(a,b) {
    result += a - b;
    return result;
}

function multiply(a,b) {
    result += a * b;
    return result;
}

function divide(a,b) {
    result += a/b;
    return result;
}

// simple calculation function //
function operate(a, operator, b) {
    return operator(a,b);
}

let result = 0;

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
    } else {
        display.textContent += numArr[`${e.target.id}`]
   }})

// clear button //
const clear = document.querySelector('#clear')

clear.addEventListener('click', () => {
    display.textContent = '';
})

const operators = document.querySelector('#operators');

const opArr = {
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/',
}

operators.addEventListener('click', (e) => {
    if (e.target.id == 'operators' || e.target.id == 'equal') {
        return;
    } else {
        display.textContent += opArr[`${e.target.id}`]
        console.log(typeof display.textContent) 
    };
})

const equal = document.querySelector('#equal')

equal.addEventListener('click', () => {
    let result = eval(display.textContent);
    display.textContent = result;
})

// Operator Events //
/*
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const times = document.querySelector('#multiply')
const split = document.querySelector('#divide')
const equal = document.querySelector('#equal')

const opArr = {
    plus: '+',
    minus: '-',
    multiply: '*',
    divide: '/',
}

plus.addEventListener('click', () => {
    let a = result + Number(display.textContent);
    console.log(a);
    display.textContent = '';
    let operator = add(a,b);
    return operator;
});

equal.addEventListener('click', () => {
    let b = result + Number(display.textContent);
    console.log(b);
    return operate;
})
*/