document.querySelector('html').className = 'js';

var h1 = document.querySelector('h1');

h1.addEventListener('click', handleHeadingClick);

function handleHeadingClick(event) {
  var heading = event.target;
  heading.innerText = 'Hello from non-anonymous targeted JavaScript';
  heading.className = 'was-clicked';
}
