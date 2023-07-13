const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')


input.addEventListener('input', onInput);

function onInput(e) {
    e.currentTarget.value !== '' ? span.textContent = e.currentTarget.value
        : span.textContent ='Anonimus';
}
