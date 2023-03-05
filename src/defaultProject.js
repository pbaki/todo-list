    import { myProjects } from "./sidebarButton";
    
    function defaultProject() {
        const title = "Default Project";
        const id = 0;
        const newlist = [];
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("Default-Project");
        const projectH = document.createElement("h1");
        projectH.innerHTML = title;
        projectDiv.appendChild(projectH);

        myProjects.push(new folder(id, title, newlist, projectDiv));
        
        const sidebarpr = document.getElementsByClassName("sidebar")[0];
     
        sidebarpr.appendChild(projectDiv);
        
        return projectDiv;
    }