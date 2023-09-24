
const inputLine = document.querySelector('#validation-input');
const lengthValue = Number(inputLine.dataset.length);

function validator(event) {
    const currentValue = event.currentTarget.value;

    if (currentValue.length === lengthValue) { 
        return inputLine.classList.add('valid') 
    }
    return inputLine.classList.add('invalid') 
};

inputLine.addEventListener('blur', validator)   