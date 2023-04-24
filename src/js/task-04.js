const counter = document.querySelector('#counter');
const value = counter.querySelector('#value');
const incrementBtn = counter.querySelector('[data-action="increment"]');
const decrementBtn = counter.querySelector('[data-action="decrement"]');

let counterValue = 0;

function increment() {
  counterValue+=1;
  value.textContent = counterValue;
}

function decrement() {
  counterValue-=1;
  value.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);