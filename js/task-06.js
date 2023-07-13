const input = document.querySelector('#validation-input');



input.addEventListener('blur', onBlur);

function onBlur(e) {
    if (e.currentTarget.value.length > e.currentTarget.dataset.length) {
        input.classList.add('invalid')
        input.classList.remove('valid')
    } else {
        input.classList.add('valid')
        input.classList.remove('invalid')
    }
   console.log(input)
}
