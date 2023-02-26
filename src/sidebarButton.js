import folder from "./folder";
import { mytodo } from "./taskButton";
import { checklist } from "./taskButton";


let myProjects = [];
let sidebarButtonFunctionality =  function(event) {
        const title = document.getElementById("title").value;


        // creating dom elements button is creating
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project" + myProjects.length);
        const projectH = document.createElement("h1");
        projectH.innerHTML = title;
        projectDiv.appendChild(projectH);

        addingObjecttoArray();

        projectDiv.addEventListener("click", switchProject)
        
        function switchProject () {

        const addTodoLabel = document.createElement('label');
        addTodoLabel.setAttribute("for", "addTodo");

        const addTodoInput = document.createElement("input");
        addTodoInput.setAttribute("type", "button");
        addTodoInput.setAttribute("value", "Add");
        addTodoInput.setAttribute("name", "addTodo");
        addTodoInput.setAttribute("id", "addTodo");

        const formTaker = document.getElementsByClassName("restContainer")[0];
        while (formTaker.children[2]){
            formTaker.removeChild(formTaker.lastChild);
        };

        formTaker.appendChild(addTodoLabel);

        addTodoInput.addEventListener("click", eventFunctionality)
    
        addTodoLabel.appendChild(addTodoInput);


            const taskcontainerpr = document.getElementsByClassName("taskcontainer")[0];
            while (taskcontainerpr.children[1]){
            taskcontainerpr.removeChild(taskcontainerpr.lastChild);
        };
//            for (let item of myProjects){
//                console.log(item)
//            }
            let projectList = myProjects[projectDiv.className.charAt(7)].arr;


            for (let item of projectList){
                taskcontainerpr.appendChild(item);
            }

        function eventFunctionality () {
            const description = document.getElementById("description").value;
        const dueDate = document.getElementById("dueDate").value;
        const priority = document.getElementById("priority").value;
        //tododomElement();

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
        taskcontainerpr.appendChild(todoDiv);
        projectList.push(todoDiv);
          
            }
        
        }

        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function(){return sidebarpr.removeChild(projectDiv)});
        deleteButton.addEventListener("click", function(){return myProjects.splice(myProjects.length - 1, 1)});
        projectDiv.appendChild(deleteButton);


        const sidebarpr = document.getElementsByClassName("sidebar")[0];
     
      sidebarpr.appendChild(projectDiv);
    }






function addingObjecttoArray () {
        const title = document.getElementById("title").value;
        const id = myProjects.length;
        const newlist = [];
        
        const domel = document.getElementsByClassName("project" + myProjects.length);


        myProjects.push(new folder(id, title, newlist, domel));
//        console.log(myProjects);
//        console.log(id);
        
        return myProjects;
    }


function defaultProject() {
        const title = document.getElementById("title").value;
        const id = myProjects.length;
        const newlist = [];
        
        const domel = document.getElementsByClassName("project" + myProjects.length);

        
        
        return new folder(id, title, newlist, domel);

}


export { sidebarButtonFunctionality };