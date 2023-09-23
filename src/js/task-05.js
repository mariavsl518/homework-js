
const inputLine = document.querySelector('#name-input');
const textLine = document.querySelector('#name-output');

function handlerInput(event) { 
    if (event.currentTarget.value === '') { 
        return textLine.textContent = 'Anonymous';
    }
    textLine.textContent = event.currentTarget.value
}
console.log(inputLine);

inputLine.addEventListener('input', handlerInput)