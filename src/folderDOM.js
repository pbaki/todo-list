import folder from "./folder";
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


function create () {
    const createLabel = document.createElement('label');
    createLabel.setAttribute("for", "create");

    const createInput = document.createElement("input");
    createInput.setAttribute("type", "button");
    createInput.setAttribute("value", "Create New");
    createInput.setAttribute("name", "create");
    createInput.setAttribute("id", "create");

// button functionality
    createInput.addEventListener("click", createProject);
    const myProjects = [];
    function createProject(event){
        const title = document.getElementById("title").value;
        myProjects.push(folder(title));
        console.log(myProjects)
        // creating dom for button
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project" + myProjects.length);
        const projectH = document.createElement("h1");
        projectH.innerHTML = title;
        projectDiv.appendChild(projectH);
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.addEventListener("click", function(){return sidebarpr.removeChild(projectDiv)});
        projectDiv.appendChild(deleteButton);

     const sidebarpr = document.getElementsByClassName("sidebar")[0];
      sidebarpr.appendChild(projectDiv);
    }

    createLabel.appendChild(createInput);

    return createLabel;
}