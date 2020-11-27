'use strict';

const display = document.querySelector('.display');
let inputs = '';
const buttons = document.querySelectorAll('.button');
const allowedInputs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];

(() => document.addEventListener('keydown', (event) => keyEventHandler(event.key)))();

const keyEventHandler = (key) => {
    console.log(key);
    if (key === 'Enter') { key = '='; }
    buttons.forEach(item => clickButton(item, key));
    console.log(key);
    if (checkAllovedInput(key)) {
        writeDisplay(addData(key));
    } else {
        if (key === '=') { inputs = calculate(inputs); }
        else { if (key === 'Backspace') { writeDisplay(removeData()); } }
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