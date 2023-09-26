function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const boxes = document.querySelector('#boxes');
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const create = controls.querySelector('[data-create]')
const destroy = controls.querySelector('[data-destroy]')

create.addEventListener('click', createMarkup)
destroy.addEventListener('click', createMarkup)

function createMarkup { 
  return `
  <div width="30px" height="30px" background-color="${getRandomHexColor()}"></div>
  `
}
boxes.insertAdjacentHTML('afterbegin', createMarkup)

