import task from "./task";

const mytodo = [];
let taskButtonFunctionality = function () {
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    tododomElement();

    // creating dom element button is creating
    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left");
    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right");

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo" + mytodo.length);

    //adding description
    const todop1 = document.createElement("p");
    todop1.innerHTML = description;

    //adding due date
    const todop2 = document.createElement("p");
    todop2.innerHTML = dueDate;

    //adding priority
    const todop3 = document.createElement("p");
    todop3.innerHTML = priority;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
        return taskcontainerpr.removeChild(todoDiv);
    });
    deleteButton.addEventListener("click", function () {
        return mytodo.splice(mytodo.length - 1, 1);
    });

    leftContainer.appendChild(checklist());
    leftContainer.appendChild(todop1);

    rightContainer.appendChild(todop2);
    rightContainer.appendChild(todop3);
    rightContainer.appendChild(deleteButton);
    todoDiv.appendChild(leftContainer);
    todoDiv.appendChild(rightContainer);

    const taskcontainerpr = document.getElementsByClassName("taskcontainer")[0];

    taskcontainerpr.appendChild(todoDiv);
};

function tododomElement() {
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const id = mytodo.length;

    mytodo.push(new task(id, description, dueDate, priority, domElement2));
    console.log(mytodo);
    console.log(id);

    return mytodo;
}

function domElement2() {
    const domel = document.getElementsByClassName("todo" + mytodo.length);

    return domel;
}

function checklist() {
    const checklistLabel = document.createElement("label");
    checklistLabel.setAttribute("for", "checklist");

    const checklistInput = document.createElement("input");
    checklistInput.setAttribute("type", "checkbox");
    checklistInput.setAttribute("name", "checklist");
    checklistInput.setAttribute("id", "checklist");

    checklistLabel.appendChild(checklistInput);

    return checklistLabel;
}

export { taskButtonFunctionality, domElement2, mytodo, checklist };
