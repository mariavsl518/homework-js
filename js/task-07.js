const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

function handlerControl(event) { 
    const value = Number(event.currentTarget.value);
    return text.style.fontSize = `${value}px`;
}

control.addEventListener('input', handlerControl)