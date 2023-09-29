function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const elements = {
   boxes: document.querySelector('#boxes'),
   controls: document.querySelector('#controls'),
   input: controls.querySelector('input'),
   create: controls.querySelector('[data-create]'),
   destroy: controls.querySelector('[data-destroy]'),
}

elements.create.addEventListener('click', createBoxes);
elements.destroy.addEventListener('click', destroyBoxes);
elements.input.addEventListener('blur', createValue)
elements.boxes.style.padding = '20px';

  function createValue(event) { 
    Number(event.currentTarget.value);
}  
const value = createValue();
console.log(value);

function createBoxes(value) {
  // const items = [];
  for (let i = 0; i <= value; i+=1) {
    const box = document.createElement('div');
    box.style.width = '30px';
    box.style.height = '30px';
    box.style.backgroundColor = `${getRandomHexColor()}`;
    elements.boxes.append(box);
    console.log(box);
    // return items.push(box);
  }
  // boxes.append(box);
  // console.log(boxes);
}

function destroyBoxes() { 
  elements.boxes.innerHTML = ''
  console.log(boxes);
}

