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