import { getAllTodos, createTodo } from './firebase/features/todo';
import { applyModalChanges, closeModal } from './modal';


const modalCloseButton = document.getElementById('cancel_modal_button');
const modalApplyButton = document.getElementById('apply_modal_button');

let TODOS = [];

const handleAddTask = async () => {
  const allTodosFromDB = await getAllTodos();
  const taskData = applyModalChanges();

  if (taskData?.task_title) {
    await createTodo(allTodosFromDB, taskData);
    const updatedTodosFromDB = await getAllTodos();

    TODOS = [...updatedTodosFromDB];

    console.log(TODOS);
  }
};

modalCloseButton.addEventListener('click', closeModal);
modalApplyButton.addEventListener('click', handleAddTask);

document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li'); 
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
      select.classList.toggle('select-clicked');
      caret.classList.toggle('caret-rotate');
      menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
      option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      options.forEach(opt => {
          opt.classList.remove('active'); 
      });
      option.classList.add('active'); 
      });
  });
  });
})
