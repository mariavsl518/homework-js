
const inputLine = document.querySelector('#name-input');
const textLine = document.querySelector('#name-output');

function handlerInput(event) { 
    if (event.currentTarget.value === '') { 
        return textLine.textContent = 'Anonymous';
    }
    textLine.textContent = event.currentTarget.value
}

inputLine.addEventListener('input', handlerInput)