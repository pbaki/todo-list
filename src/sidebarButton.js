import folder from "./folder";
import { checklist } from "./taskButton";

let myProjects = [];
let sidebarButtonFunctionality = function () {
    const title = document.getElementById("title").value;

    // creating dom elements button is creating
    const projectDiv = document.createElement("div");
    const id1 = Math.random().toString(16).slice(2);
    projectDiv.classList.add("project" + id1);
    const projectH = document.createElement("h2");
    projectH.innerHTML = title;
    projectDiv.appendChild(projectH);

    //Object to array
    const id2 = myProjects.length;
    const newlist = [];

    myProjects.push(new folder(id2, title, newlist, projectDiv));
    console.log(myProjects);

    projectDiv.addEventListener("click", switchProject);

    function switchProject() {
        const addTodoLabel = document.createElement("label");
        addTodoLabel.setAttribute("for", "addTodo");

        const addTodoInput = document.createElement("input");
        addTodoInput.setAttribute("type", "button");
        addTodoInput.setAttribute("value", "Add");
        addTodoInput.setAttribute("name", "addTodo");
        addTodoInput.setAttribute("id", "addTodo");

        const formTaker = document.getElementsByClassName("restContainer")[0];
        while (formTaker.children[2]) {
            formTaker.removeChild(formTaker.lastChild);
        }

        formTaker.appendChild(addTodoLabel);

        addTodoInput.addEventListener("click", eventFunctionality);

        addTodoLabel.appendChild(addTodoInput);

        const taskcontainerpr =
            document.getElementsByClassName("taskcontainer")[0];
        while (taskcontainerpr.children[1]) {
            taskcontainerpr.removeChild(taskcontainerpr.lastChild);
        }
        let projectIndex = myProjects.findIndex(
            (e) => e.domElement.className === projectDiv.className
        );
        if (projectIndex == -1) {
            return;
        } else {
            var projectList = myProjects[projectIndex].arr;
            for (let item of projectList) {
                taskcontainerpr.appendChild(item);
            }
        }

        function eventFunctionality() {
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priority").value;

            // creating dom element button is creating
            const leftContainer = document.createElement("div");
            leftContainer.classList.add("left");
            const rightContainer = document.createElement("div");
            rightContainer.classList.add("right");

            const id = Math.random().toString(16).slice(2);
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo" + id);

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
                return todoDiv.parentNode.removeChild(todoDiv);
            });
            deleteButton.addEventListener("click", function () {
                projectList.splice(
                    projectList.findIndex(
                        (e) => e.className === todoDiv.className
                    ),
                    1
                );
                return projectList;
            });

            leftContainer.appendChild(checklist());
            leftContainer.appendChild(todop1);

            rightContainer.appendChild(todop2);
            rightContainer.appendChild(todop3);
            rightContainer.appendChild(deleteButton);
            todoDiv.appendChild(leftContainer);
            todoDiv.appendChild(rightContainer);

            const taskcontainerpr =
                document.getElementsByClassName("taskcontainer")[0];

            taskcontainerpr.appendChild(todoDiv);

            myProjects.push(new folder(id2, title, newlist, projectDiv));
            projectList.push(todoDiv);
        }
    }

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function () {
        return projectDiv.parentNode.removeChild(projectDiv);
    });
    deleteButton.addEventListener("click", function () {
        myProjects.splice(
            myProjects.findIndex(
                (e) => e.domElement.className === projectDiv.className
            ),
            1
        );
        return myProjects;
    });
    projectDiv.appendChild(deleteButton);

    const sidebarpr = document.getElementsByClassName("sidebar")[0];

    sidebarpr.appendChild(projectDiv);

    //Adding after click functionality to projects
    const projects = document.querySelectorAll("[class^='project']");

    projects.forEach((project) => {
        project.addEventListener("click", () => {
            projects.forEach((p) => {
                p.classList.remove("clicked");
            });

            project.classList.add("clicked");
        });
    });
};

export { sidebarButtonFunctionality, myProjects };
