const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

/*
<li>
    <input type="checkbox"/>
    <button>delete</button>
    <span>text</span>
</li>
*/

function createTodo() {
    // make li 
    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox"/>
        <button>delete</button>
        <span>text</span>
    `;
    // make iput 
    // make button 
    // make span 
}

function newTodo() {

    // get text
    // create li
    // create input checkbox
    // create button 
    // create span 
    // update counts
}

function delteTodo() {
    // find the todo to delete
    // delete 
    // update counts
}