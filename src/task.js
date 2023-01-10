import { tododomElement, mytodo } from "./taskDOM";

const task = function(description, dueDate, priority) {

    const connector = tododomElement();
    console.log(connector);

  return {description, dueDate, priority, connector}
}
export default task;