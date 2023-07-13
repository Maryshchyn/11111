const dec = document.querySelector('button[data-action="decrement"]');
const count = document.querySelector('#value')
const inc = document.querySelector('button[data-action="increment"]');


dec.addEventListener('click', onDec);
inc.addEventListener('click', onInc);

let res = 0;

function onDec(e) {
    if (res > 0) {
         if (e) {
        res -= 1
        count.textContent = res
    }
    }
   
}
function onInc(e) {
    
         if (e) {
        res += 1
        count.textContent = res
    }
    
   
}



// console.log(count)