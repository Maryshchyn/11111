function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const box = document.querySelector('#boxes');

 
input.addEventListener('input', onInput);

function onInput(e) {
  const val = e.currentTarget.value;
  for (let i = 0; i < val.length; i++) {
    btnCreate.addEventListener('click', onCreate);
    function onCreate(e) {
      const newEl = document.createElement('div');
      newEl = i * 10;
      newEl.style.width = '40px';
      newEl.style.height = '40px';
      newEl.style.backgroundColor = getRandomHexColor();
      box.append(newEl)
    }
    
    
  }
}