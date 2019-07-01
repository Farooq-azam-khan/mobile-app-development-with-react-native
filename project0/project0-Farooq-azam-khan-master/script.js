const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');

const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  const text = document.getElementById('todo-content').value;
  if (!text) {
    document.getElementById('error').innerHTML = 'please add something';
    return;
  }
  document.getElementById('error').innerHTML = '';
  // increment todo count and uncheck count 
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;

  // each todo root div 
  const rootdiv = document.createElement('div');
  rootdiv.id = `div-${itemCountSpan.innerHTML}`;


  // checkbox 
  const newCheck = document.createElement('input');
  newCheck.type = 'checkbox';
  newCheck.className = 'checkInput';
  newCheck.id = `check-${itemCountSpan.innerHTML}`;
  newCheck.checked = false;


  // delete button 
  const newDelete = document.createElement('button');
  newDelete.innerHTML = 'delete';
  newDelete.id = `delete-${itemCountSpan.innerHTML}`;
  newDelete.className = 'delete';

  // li element 
  const newLi = document.createElement('li');

  newLi.innerHTML = text;
  newLi.id = `li-${itemCountSpan.innerHTML}`;

  rootdiv.appendChild(newCheck);
  rootdiv.appendChild(newLi);
  rootdiv.appendChild(newDelete);

  list.appendChild(rootdiv);

}

window.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addTodo').addEventListener('click', newTodo);
  // check if delete button clicked or check button clicked
  document.addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
      // decrement todo count and uncheck count 
      itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1;
      let check_id = `check-${e.target.id.split('-')[1]}`;
      if (!document.getElementById(check_id).checked) {
        uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1;
      }

      let div_id = e.target.id.split('-')[1];
      div_id = `div-${div_id}`;
      const divOfDelete = document.getElementById(div_id);
      list.removeChild(divOfDelete);
    } else if (e.target.className === 'checkInput') {
      let div_id = e.target.id.split('-')[1];
      div_id = `div-${div_id}`;
      const checkedDiv = document.getElementById(div_id);
      if (event.target.checked) {
        uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1;
        // line through li element
        document.getElementById(`li-${e.target.id.split('-')[1]}`).className = 'line-through';
        // text-decoration: line-through;
      } else if (!event.target.checked) {
        uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;
        document.getElementById(`li-${e.target.id.split('-')[1]}`).className = '';
      }
    }
  });
});