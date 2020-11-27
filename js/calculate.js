'use strict';

const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

const calculate = (equation) => {
    let isBigIntNumber = false;
    const numbers = equation.split(/[+\-*/]+/).map(Number);
    const operation = equation.match(/[+\-*/]/g);
    console.log(equation);
    console.log(numbers);
    console.log(operation);
    // allowedInputs.find(item => item === key);
    return numbers.reduce((prev, next, index) => operators[operation[index - 1]](prev, next));
}
