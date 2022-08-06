// math operators //
function add(a,b) {
    return a += b;
}

function subtract(a,b) {
    return a -= b;
}

function multiply(a,b) {
    return a *=b;
}

function divide(a,b) {
    return a /=b;
}

// simple calculation function //
function operate(a,b,operator) {
    return operator(a,b);
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
}

// Simple number pressing function //
const numbers = document.querySelector('#numbers');
const display = document.querySelector('.calculator-display');

numbers.addEventListener('click', (e) => {
    display.textContent += numArr[`${e.target.id}`]
   })


