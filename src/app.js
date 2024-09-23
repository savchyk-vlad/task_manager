import { getAllTodos, createTodo } from './firebase/features/todo';
import { applyModalChanges, handleCloseModal, handleOpenModal } from './modal';
import { renderTasksOnHomePage } from './home';

const modalCloseButton = document.getElementById('cancel_modal_button');
const modalApplyButton = document.getElementById('apply_modal_button');
const modalOpenButton = document.getElementById('open-modal-button');

let TODOS = [];

const handleAddTask = async () => {
  const allTodosFromDB = await getAllTodos();
  const taskData = applyModalChanges();

  if (taskData?.task_title) {
    await createTodo(allTodosFromDB, taskData);
    const updatedTodosFromDB = await getAllTodos();

    TODOS = [...updatedTodosFromDB];

    renderTasksOnHomePage();
  }
};

renderTasksOnHomePage();

modalCloseButton.addEventListener('click', handleCloseModal);
modalApplyButton.addEventListener('click', handleAddTask);
modalOpenButton.addEventListener('click', handleOpenModal);

// Search bar
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const searchInput = document.getElementById('searchInput');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(searchInput.value);
    searchInput.value = '';
});
});
