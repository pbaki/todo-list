import { domElement, newlist } from "./folderDOM";
import { mytodo } from "./taskDOM";


const folder = function(id, title, connector, arr) {
    this.id = id,
    this.title = title,
    this.connector = connector,
    this.arr = arr

    connector =  domElement();
    console.log(connector);

}



export default folder;
