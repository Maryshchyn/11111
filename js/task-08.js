const form = document.querySelector('.login-form');


form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault()
  // console.dir(e.currentTarget.elements.email.name)
  if (e.currentTarget.elements.email.value === '' || e.currentTarget.elements.password.value === '') {
    alert('we')
  } else {
    const item = {
      [e.currentTarget.elements.email.name]: e.currentTarget.elements.email.value,
      [e.currentTarget.elements.password.name]: e.currentTarget.elements.password.value,
      }
      console.log(item)
  }
 form.reset()
  }
  
