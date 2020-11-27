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
    buttons.forEach(item => clickButton(item, key));
    if (checkAllovedInput(key) || key === '=') {
        inputHandler(key);
    } else { if (key === 'Backspace') { writeDisplay(removeData()); } }
}


const inputHandler = (character) => {
    if (character === '=') { inputs = calculate(inputs); writeDisplay(inputs); } else {
        writeDisplay(addData(character));
    }
}


const checkAllovedInput = (key) => allowedInputs.find(item => item === key);

const addData = (key) => inputs = inputs + key;
const removeData = (key) => inputs = inputs.slice(0, -1);

const writeDisplay = (somethingToWrite) => display.innerHTML = somethingToWrite;

const clickButton = (button, key) => {
    if (button.innerHTML === key) { console.log(button); activateButton(button); }
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