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
  incrementItemCount();
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;

  // each todo root div 
  const rootdiv = document.createElement('div');
  rootdiv.id = `div-${itemCountSpan.innerHTML}`;


  // checkbox 
  const newCheck = createCheckElement();
  // delete button 
  const newDelete = createDeleteElement();
  // li element 
  const newLi = createLiElement();

  rootdiv.appendChild(newCheck);
  rootdiv.appendChild(newLi);
  rootdiv.appendChild(newDelete);

  list.appendChild(rootdiv);

}

function createCheckElement() {
  const newCheck = document.createElement('input');
  newCheck.type = 'checkbox';
  newCheck.className = 'checkInput';
  newCheck.id = `check-${itemCountSpan.innerHTML}`;
  newCheck.checked = false;
  return newCheck;
}

function createLiElement() {
  const newLi = document.createElement('li');
  newLi.innerHTML = text;
  newLi.id = `li-${itemCountSpan.innerHTML}`;
  return newLi;
}
function createDeleteElement() {
  const deleteElement = document.createElement('button');
  deleteElement.innerHTML = 'delete';
  deleteElement.id = `delete-${itemCountSpan.innerHTML}`;
  deleteElement.className = 'delete';
  return deleteElement;
}

window.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addTodo').addEventListener('click', newTodo);
  // check if delete button clicked or check button clicked
  document.addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
      // decrement todo count and uncheck count 
      decrementItemCount();
      let check_id = `check-${getIdFromElement(e.target)}`;
      if (!document.getElementById(check_id).checked) {
        decrementUnchecedCount();
      }

      const div_id = `div-${getIdFromElement(e.target)}`;
      const divOfDelete = document.getElementById(div_id);
      list.removeChild(divOfDelete);
    } else if (e.target.className === 'checkInput') {
      const div_id = `div-${getIdFromElement(e.target)}`;
      const liElement = document.getElementById(`li-${getIdFromElement(e.target)}`);
      if (event.target.checked) {
        decrementUnchecedCount();
        // line through li element
        liElement.className = 'line-through';
        // text-decoration: line-through;
      } else if (!event.target.checked) {
        incrementUnchecedCount();
        liElement.className = '';
      }
    }
  });
});

function getIdFromElement(e) {
  return e.id.split('-')[1];
}

function incrementUnchecedCount() {
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) + 1;
}
function decrementUnchecedCount() {
  uncheckedCountSpan.innerHTML = parseInt(uncheckedCountSpan.innerHTML) - 1;
}

function incrementItemCount() {
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) + 1;
}
function decrementItemCount() {
  itemCountSpan.innerHTML = parseInt(itemCountSpan.innerHTML) - 1;
}