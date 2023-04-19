const task = function (id, description, dueDate, priority, connector) {
    (this.id = id),
        (this.description = description),
        (this.dueDate = dueDate),
        (this.priority = priority),
        (this.connector = connector);
};
export default task;

const sum = (a, b) => {
    return a + b;
};

console.log(sum(1, 3));
