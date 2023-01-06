import './style.css';
import printMe from './print.js';

function component() {
  const element = document.createElement('div');

  element.innerHTML = "asd";

  return element;
}

document.body.appendChild(component());

console.log("asd")