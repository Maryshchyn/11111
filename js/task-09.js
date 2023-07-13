function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};


const btn = document.querySelector(".change-color");
const span = document.querySelector('.color')
console.log(span)
btn.addEventListener('click', onClick)

function onClick(e) {
  
    span.textContent = getRandomHexColor();
   document.body.style.backgroundColor = getRandomHexColor()
  
}