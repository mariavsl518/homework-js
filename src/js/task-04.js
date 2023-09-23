
const decrementBtn = document.querySelector('[data-action="decrement"]')
const incrementBtn = document.querySelector('[data-action="increment"]')
const value = document.querySelector('#value')

let counterValue = 0;

function decreseAction() {
    counterValue -= 1;
    value.textContent = counterValue;
};

function increseAction() { 
    counterValue += 1;
    value.textContent = counterValue;

};

decrementBtn.addEventListener('click', decreseAction);
incrementBtn.addEventListener('click', increseAction);