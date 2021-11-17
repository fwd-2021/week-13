'use strict';

var h1 = document.querySelector('#home h1');

document.querySelector('html').className = 'js';

if (h1) {
  // Only add this event listener on #home page
  h1.addEventListener('click', handleHeadingClick);
}

function handleHeadingClick(event) {
  var heading = event.target;
  heading.innerText = 'Hello from non-anonymous targeted JavaScript';
  heading.className = 'was-clicked';
}
