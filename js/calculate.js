'use strict';

const calculate = (equation) => {
    const numbers = equation.split(/[+,—,*,/]+/);
    const operation = equation.match(/[+,—,*,/]/g);
    console.log(equation);
    console.log(numbers);
    console.log(operation);
    // allowedInputs.find(item => item === key);
    return numbers;
}