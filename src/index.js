import './style.css';
import title from './modules/importImages.js';
import addItem from './modules/addItem.js';

// GET ITEM FROM INPUT AND PUT THEM IN LOCAL STORAGE AND IN OBJECT
const listEl = document.querySelector('.list-section');
const inputBtn = document.querySelector('.enter-icon');
const userInput = document.querySelector('.user-input');

const todo = JSON.parse(localStorage.getItem('todo')) || [];

todo.forEach((task,index,element) => {

})
inputBtn.addEventListener('click', addItem);
userInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    addItem();
  }
});
title();
const resetBtn = document.querySelector('.reload-icon');
const resetStorage = () => {
  userInput.value = '';
  localStorage.clear();
  listEl.innerHTML = '';
};

resetBtn.addEventListener('click', resetStorage);
// GET ITEM AND SHOW ON THE LIST

let listItem = '';
todo.forEach((element,index) => {
  const code = `
  <div class="list-item">
    <div>
      <input type="checkbox" id="item-${element.index}">
      <p>${element.description}</p>
    </div>
      <button class="reset-btn" id="${index}">
      <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      stroke-width="1.5" 
      stroke="currentColor" 
      class="delete-icon">
    <path stroke-linecap="round" stroke-linejoin="round" 
    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
      </button>
  </div>
  `;
  listItem += code;
});
listEl.innerHTML = listItem;
