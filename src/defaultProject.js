import { sidebarButtonFunctionality } from "./sidebarButton";

export default function defaultProject() {
    sidebarButtonFunctionality();

    let sidebarchild = document.getElementsByClassName("sidebar")[0];
    let defaultProject = sidebarchild.children[1];

    let defaultTitle = defaultProject.firstChild;
    defaultTitle.innerHTML = "Default Project";

    let buttonToRemove = defaultProject.lastChild;
    buttonToRemove.remove();
    return defaultProject;
}
