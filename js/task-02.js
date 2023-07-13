const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector('#ingredients');

const res = ingredients.map(el => {
  const element = document.createElement('li');
  element.textContent = el;
  element.classList.add('item')
  return element
})
list.append(...res)
// console.log(res)