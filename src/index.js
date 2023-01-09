import './style.css';
import taskdom from './taskDOM';
import folderform from './folderDOM';

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

  sidebar.appendChild(folderform());

  return sidebar;
}

function taskcontainer() {
  const taskcontainer = document.createElement("div");
  taskcontainer.classList.add("taskcontainer");

    taskcontainer.appendChild(taskdom());

  return taskcontainer;
}



export {header, sidebar, taskcontainer}

document.body.appendChild(layout());
