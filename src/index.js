import './style.css';
import printMe from './task.js';
import printMe2 from './folder';

function layout() {
  const element = document.createElement('div');
  element.classList.add("main");

  element.appendChild(header());
  element.appendChild(sidebar());
  element.appendChild(taskcontainer());

  return element;
}


function header() {
  const header = document.createElement("div");
  header.classList.add("header");

  return header;
}

function sidebar() {
  const sidebar = document.createElement("div");
  sidebar.classList.add("sidebar");

  return sidebar;
}

function taskcontainer() {
  const taskcontainer = document.createElement("div");
  taskcontainer.classList.add("taskcontainer");

  return taskcontainer;
}




document.body.appendChild(layout());
