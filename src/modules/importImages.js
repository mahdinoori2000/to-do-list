import reloadImg from '../icons/reload-icon.svg'

const titleSection = document.querySelector('.title-section');

const title = () => {
  const reloadBtn = `
  <h1>Today's To Do</h1>
  <img class="reload-icon" src="${reloadImg}" alt="Reload Icon">
  `
 titleSection.innerHTML = reloadBtn;
}

export {title}