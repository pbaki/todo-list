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
    createInput.setAttribute("value", "Create");
    createInput.setAttribute("name", "create");
    createInput.setAttribute("id", "create");

    createLabel.appendChild(createInput);

    return createLabel;
}