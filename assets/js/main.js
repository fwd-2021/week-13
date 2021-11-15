document.querySelector('html').className = 'js';

var h1 = document.querySelector('h1');

h1.addEventListener('click', function() {
  console.log('OMG heard the click event on h1!!!');
});
