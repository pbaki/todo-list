import { domElement } from "./folderDOM";
import { mytodo } from "./taskDOM";

const folder = function(id, title, connector, newlist, taskStorage) {
    newlist = [];
    // taskStorage = () => {
    //   return mytodo[2].id;
    // }
    //console.log(taskStorage());

    connector =  domElement();
    console.log(connector);

  return {id, title, connector, newlist, taskStorage}
}


//console.log(folder("title"))

export default folder;
export { newlist };