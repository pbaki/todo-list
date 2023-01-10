import task from "./task.js";
export default function taskform() {
    const form = document.createElement('form');
    form.classList.add("form");

//    form.appendChild(checklist());
    form.appendChild(description());
    form.appendChild(dueDate());
    form.appendChild(priority());
    form.appendChild(addTodo());

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
      
function checklist() {
    const checklistLabel = document.createElement('label');
    checklistLabel.setAttribute("for", "checklist");

    const checklistInput = document.createElement("input");
    checklistInput.setAttribute("type", "checkbox");
    checklistInput.setAttribute("name", "checklist");
    checklistInput.setAttribute("id", "checklist");

    checklistLabel.appendChild(checklistInput);

    return checklistLabel;
}
    const mytodo = [];
function addTodo() {
    const addTodoLabel = document.createElement('label');
    addTodoLabel.setAttribute("for", "addTodo");

    const addTodoInput = document.createElement("input");
    addTodoInput.setAttribute("type", "button");
    addTodoInput.setAttribute("value", "Add");
    addTodoInput.setAttribute("name", "addTodo");
    addTodoInput.setAttribute("id", "addTodo");


    //button functionality
    addTodoInput.addEventListener("click", createTodo);

    function createTodo(event){
        const description = document.getElementById("description").value;
        const dueDate = document.getElementById("dueDate").value;
        const priority = document.getElementById("priority").value;
        mytodo.push(task(description, dueDate, priority));
        console.log(mytodo);
        // creating dom for button
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo" + mytodo.length);
        todoDiv.appendChild(checklist());
        //adding description
        const todop1 = document.createElement("p");
        todop1.innerHTML = description;
        todoDiv.appendChild(todop1);
        //adding due date
        const todop2 = document.createElement("p");
        todop2.innerHTML = dueDate;
        todoDiv.appendChild(todop2);
        //adding priority
        const todop3 = document.createElement("p");
        todop3.innerHTML = priority;
        todoDiv.appendChild(todop3);


        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function(){return taskcontainerpr.removeChild(todoDiv)});
        deleteButton.addEventListener("click", function(){return mytodo.splice(mytodo.length - 1, 1)});
        todoDiv.appendChild(deleteButton);

     const taskcontainerpr = document.getElementsByClassName("taskcontainer")[0];
      taskcontainerpr.appendChild(todoDiv);
    }

addTodoLabel.appendChild(addTodoInput);

    return addTodoLabel;
}

function tododomElement () {


    const domel = document.getElementsByClassName("todo" + mytodo.length);
    
    return domel
}

export {tododomElement, mytodo}