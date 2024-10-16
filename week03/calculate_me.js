function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function multy(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function calculateEquation(x, y) {
    return plus(plus(x, y), divide(minus(x, y), multy(x, y)));
}

console.log(calculateEquation(10, 5));