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

const myProjects = [];
let newlist = [];
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
        newlist = [];
        const title = document.getElementById("title").value;
        

        // creating dom for button
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project" + myProjects.length);
        const projectH = document.createElement("h1");
        projectH.innerHTML = title;
        projectDiv.appendChild(projectH);

        projectDiv.addEventListener("click", switchProject)
        function switchProject(){
            //onclick switching between todo 
        const taskcontainerpr = document.getElementsByClassName("taskcontainer")[0];

            
            for (let item of mytodo){
                newlist.push(item);
            }
            mytodo.splice(0, mytodo.length);
            for (let item of newlist){
                console.log(item)
                
            }
            
            

            };
        workingOnObject();
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
        myProjects.push(new folder(id, title, domElement, newlist));
        console.log(myProjects);
//        console.log(id);
        
        return myProjects;
    }
    
    

    createLabel.appendChild(createInput);

    return createLabel;
}


function domElement () {
    const domel = document.getElementsByClassName("project" + myProjects.length);
    
    return domel;
}


export { domElement, myProjects }