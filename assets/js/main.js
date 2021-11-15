document.querySelector('html').className = 'js';

var h1 = document.querySelector('h1');

h1.addEventListener('click', function(event) {
  event.target.innerText = 'Hello from targeted JavaScript';
});
