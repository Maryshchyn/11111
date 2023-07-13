const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


input.addEventListener('input', onInput);

function onInput(e) {
    const res = e.currentTarget.value;
    console.log(res)
    text.style.fontSize  = `${res}px`

}