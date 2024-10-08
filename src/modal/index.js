const modal = document.getElementById('modal_cover_placeholder');
const taskTitleInput = document.getElementById('task_title_input');
const taskDescriptionInput = document.getElementById('task_description_input');

let CURRENT_TASK_STATE = {};

const taskTitleEvent = e => {
  const task_title = e.target.value;

  CURRENT_TASK_STATE = { ...CURRENT_TASK_STATE, task_title };
};

const taskDescriptionEvent = e => {
  const task_description = e.target.value;

  CURRENT_TASK_STATE = { ...CURRENT_TASK_STATE, task_description };
};

export const closeModal = () => {
  modal.style.display = 'none';
};

export const applyModalChanges = () => {
  if (!CURRENT_TASK_STATE.task_title) {
    console.log('Task title is required!');

    return;
  }

  closeModal();
  return CURRENT_TASK_STATE;
};

taskTitleInput.addEventListener('input', taskTitleEvent);
taskDescriptionInput.addEventListener('input', taskDescriptionEvent);
