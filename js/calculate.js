'use strict';

const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
}

const calculate = (equation) => {
    const numbers = createBigIntCheckedNumberArrayFromInputString(equation);
    const operation = equation.match(/[+\-*/]/g);
    let result = runCalc(numbers, operation);
    if (!Number.isSafeInteger(result)) { result = runCalcBigInt(numbers, operation); console.log('sumbigint'); }
    console.log('numbers:', typeof numbers[0]);
    console.log('result:', typeof result);
    return result.toString();
}


const createBigIntCheckedNumberArrayFromInputString = (string) => {
    let returnArray = createNumberArrayFromInputString(string);
    if (returnArray.some(number => !Number.isSafeInteger(number))) { returnArray = createBigintArrayFromInputString(string) };
    return returnArray;
}

const createNumberArrayFromInputString = (string) => string.split(/[+\-*/]+/).map(Number);

const createBigintArrayFromInputString = (string) => string.split(/[+\-*/]+/).map(BigInt);

const runCalc = (numbers, operation) => numbers.reduce((prev, next, index) => operators[operation[index - 1]](prev, next));
const runCalcBigInt = (numbers, operation) => numbers.reduce((prev, next, index) => operators[operation[index - 1]](BigInt(prev), BigInt(next)));