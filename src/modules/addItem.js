import showElement from './showItem';

const userInput = document.querySelector('.user-input');
const todo = JSON.parse(localStorage.getItem('todo')) || [];

const addItem = () => {
  if (userInput.value) {
    const list = {
      index: todo.length + 1,
      description: userInput.value,
      completed: false,
    };
    todo.push(list);
    userInput.value = '';
    localStorage.setItem('todo', JSON.stringify(todo));
    showElement(list);
  }
};

export default addItem;