import { newlist } from "./folderDOM";
import { mytodo } from "./taskDOM";


const folder = function(id, title, arr, domElement) {
    this.id = id,
    this.title = title,
    this.arr = arr,
    this.domElement = domElement

}



export default folder;
