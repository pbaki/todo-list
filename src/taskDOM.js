import { taskButtonFunctionality } from "./taskButton.js";
export default function taskform() {
    const form = document.createElement('form');
    form.classList.add("taskForm");

    const descContainer = document.createElement('div');
    descContainer.classList.add('descContainer');

    const restContainer = document.createElement('div');
    restContainer.classList.add('restContainer');

//    form.appendChild(checklist());
    descContainer.appendChild(description());
    restContainer.appendChild(dueDate());
    restContainer.appendChild(priority());
    restContainer.appendChild(addTodo());

    form.appendChild(descContainer);
    form.appendChild(restContainer);

    return form; 
}
function description() {
    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.innerHTML = "Description";

    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("id", "description");

    descriptionLabel.appendChild(descriptionInput);

    return descriptionLabel;
}

function dueDate() {
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.innerHTML = "Due Date";

    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("name", "dueDate");
    dueDateInput.setAttribute("id", "dueDate");

    dueDateLabel.appendChild(dueDateInput);

    return dueDateLabel;
}

function priority() {
    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("name", "priority");
    prioritySelect.setAttribute("id", "priority");

    const option1 = document.createElement('option');
    option1.setAttribute("value", "Urgent");
    option1.innerHTML = "Urgent";

    const option2 = document.createElement('option');
    option2.setAttribute("value", "Normal");
    option2.innerHTML = "Normal";

    const option3 = document.createElement('option');
    option3.setAttribute("value", "Low");
    option3.innerHTML = "Low";

    prioritySelect.appendChild(option1);
    prioritySelect.appendChild(option2);
    prioritySelect.appendChild(option3);

    return prioritySelect;
}
      

function addTodo() {
    const addTodoLabel = document.createElement('label');
    addTodoLabel.setAttribute("for", "addTodo");

    const addTodoInput = document.createElement("input");
    addTodoInput.setAttribute("type", "button");
    addTodoInput.setAttribute("value", "Add");
    addTodoInput.setAttribute("name", "addTodo");
    addTodoInput.setAttribute("id", "addTodo");


    //button functionality
    addTodoInput.addEventListener("click", () => taskButtonFunctionality());


addTodoLabel.appendChild(addTodoInput);

    return addTodoLabel;
}

