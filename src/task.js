import { domElement } from "./taskDOM";

const task = function(id, description, dueDate, priority, connector) {

    connector = domElement();
    console.log(connector);

  return {id, description, dueDate, priority, connector}
}
export default task;