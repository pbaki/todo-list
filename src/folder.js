import { domElement } from "./folderDOM";

const folder = function(id, title, connector) {

    connector =  domElement();
    console.log(connector);


  return {id, title, connector}
}

//console.log(folder("title"))

export default folder;