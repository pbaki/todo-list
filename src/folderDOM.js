import folder from "./folder";
import { mytodo } from "./taskDOM";
import { domElement2 } from "./taskDOM";
export default function folderform () {
    const form = document.createElement('form');
    form.classList.add("form");

    form.appendChild(title());
    form.appendChild(create());

    return form; 
}

function title () {
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute("for", "title");
    titleLabel.innerHTML = "Title";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title");

    titleLabel.appendChild(titleInput);

    return titleLabel;
}

let myProjects = [];
function create () {
    const createLabel = document.createElement('label');
    createLabel.setAttribute("for", "create");

    const createInput = document.createElement("input");
    createInput.setAttribute("type", "button");
    createInput.setAttribute("value", "Create New");
    createInput.setAttribute("name", "create");
    createInput.setAttribute("id", "create");

// Create New button functionality
    createInput.addEventListener("click", createProject);
    function createProject(event){
        const title = document.getElementById("title").value;
        
        // creating dom for button
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project" + myProjects.length);
        const projectH = document.createElement("h1");
        projectH.innerHTML = title;
        projectDiv.appendChild(projectH);

        workingOnObject();


        projectDiv.addEventListener("click", switchProject)
        function switchProject () {
            const taskcontainerpr = document.getElementsByClassName("taskcontainer")[0];
            while (taskcontainerpr.children[1]){
            taskcontainerpr.removeChild(taskcontainerpr.lastChild);
        };
            for (let item of myProjects){
                const asd = document.querySelectorAll("[class*=project]")
                asd[item.id].addEventListener("click", () => {
                    for (let element of item.arr){
                        taskcontainerpr.appendChild(element)
                    }
                });
                console.log(item)
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

   

    function workingOnObject () {
        const title = document.getElementById("title").value;
        const id = myProjects.length;
        const newlist = [];
        const todoElements = document.querySelectorAll("[class*=todo]")
        for (let item of todoElements){
            newlist.push(item)
        };
        const taskcontainerpr = document.getElementsByClassName("taskcontainer")[0];
        while (taskcontainerpr.children[1]){
            taskcontainerpr.removeChild(taskcontainerpr.lastChild);
        };
        const domel = document.getElementsByClassName("project" + myProjects.length);


        myProjects.push(new folder(id, title, newlist, domel));
        console.log(myProjects);
//        console.log(id);
        
        return myProjects;
    }
    
    

    createLabel.appendChild(createInput);

    return createLabel;
};




export { myProjects }