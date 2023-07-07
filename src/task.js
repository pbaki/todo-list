export default function Task(id, description, dueDate, priority, connector) {
    this.id = id;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.connector = connector;
}
