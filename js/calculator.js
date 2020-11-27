'use strict';

const display = document.querySelector('.display');
let inputs = '';
const buttons = document.querySelectorAll('.button');
const allowedInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];

(() => {
    document.addEventListener('keydown', (event) => keyEventHandler(event.key))
    buttons.forEach(item => item.addEventListener('click', () => inputHandler(item.textContent)))
})();

const keyEventHandler = (key) => {
    if (key === 'Enter') { key = '='; }
    if (key === 'Escape') { key = 'C'; }
    buttons.forEach(item => clickButton(item, key));
    if (checkAllovedInput(key) || key === '=' || key === 'C') {
        inputHandler(key);
    } else { if (key === 'Backspace') { writeDisplay(removeData()); } }
}


const inputHandler = (character) => {
    if (!((inputs.length > 0) && Number.isNaN(Number(inputs.substr(inputs.length - 1))) && Number.isNaN(Number(character))) || character === 'C') {
        display.classList.remove('alert');
        if (character === 'x') { character = '*'; }
        if (character === 'C') { inputs = ''; } else {
            if (character === '=') { inputs = calculate(inputs); } else {
                addData(character);
            }
        }
        writeDisplay(inputs);
    } else {
        display.classList.add('alert');
    }
}


const checkAllovedInput = (key) => allowedInputs.find(item => item === key);

const addData = (key) => inputs = inputs + key;
const removeData = (key) => inputs = inputs.slice(0, -1);

const writeDisplay = (somethingToWrite) => display.innerHTML = somethingToWrite;

const clickButton = (button, key) => {
    if (button.innerHTML === key) { activateButton(button); }
};


const activateButton = (button) => {
    button.classList.add('beforeActive');
    setTimeout(function () {
        button.classList.remove('beforeActive');
        button.classList.add('activated');
        setTimeout(function () {
            button.classList.remove('activated');
        }, 150);
    }, 150);

}