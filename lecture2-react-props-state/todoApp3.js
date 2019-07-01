// store todos in memory

let todos = [];
function renderTodo(todo) {
    // render a single todo 
}

function render() {
    // render the entire todos 
    list.innerHTML = '';
    todo.map(renderTodo).forEach(todo => list.appendChild(todo));
    // update counts
    return true;
}

function addTodo(name) {
    const todo = new todo(name);
    todos.push(todo)
    return render()
}

function removeTodo() {
    const todo = this.todoRef;
    todos = todos.filter(t => t !== todo);
    return render();
}