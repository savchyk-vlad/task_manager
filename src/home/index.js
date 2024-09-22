import { getAllTodos } from '../firebase/features/todo';

const tasksContainer = document.getElementById('tasks-container');

export const renderTasksOnHomePage = async () => {
  try {
    const allTodosFromDB = await getAllTodos();

    if (allTodosFromDB.length) {
      allTodosFromDB.forEach(task =>
        tasksContainer.insertAdjacentHTML(
          'beforeend',
          `<div class="task">
          <div class="task-inner-container">
            <div class="task-left-side">
              <label class="task-checkbox-container">
                <input type="checkbox" class="task-checkbox" onchange="console.log('Change status')">
                <span class="task-checkmark"></span>
              </label>
              <span class="task-title">${task.task_title}</span>
            </div>

            <div class="task-actions">
              <button class="task-button" onclick="console.log('Edit')">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.67272 3.99106L1 10.6637V14H4.33636L11.0091 7.32736M7.67272 3.99106L10.0654 1.59837L10.0669 1.59695C10.3962 1.26759 10.5612 1.10261 10.7514 1.04082C10.9189 0.986392 11.0993 0.986392 11.2669 1.04082C11.4569 1.10257 11.6217 1.26735 11.9506 1.59625L13.4018 3.04738C13.7321 3.37769 13.8973 3.54292 13.9592 3.73337C14.0136 3.90088 14.0136 4.08133 13.9592 4.24885C13.8974 4.43916 13.7324 4.60414 13.4025 4.93398L13.4018 4.93468L11.0091 7.32736M7.67272 3.99106L11.0091 7.32736" stroke="#CDCDCD" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              
              <button class="task-button" onclick="console.log('Delete')">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.87414 7.61505C3.80712 6.74386 4.49595 6 5.36971 6H12.63C13.5039 6 14.1927 6.74385 14.1257 7.61505L13.6064 14.365C13.5463 15.1465 12.8946 15.75 12.1108 15.75H5.88894C5.10514 15.75 4.45348 15.1465 4.39336 14.365L3.87414 7.61505Z" stroke="#CDCDCD"/>
                  <path d="M14.625 3.75H3.375" stroke="#CDCDCD" stroke-linecap="round"/>
                  <path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" stroke="#CDCDCD"/>
                  <path d="M10.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/>
                  <path d="M7.5 9V12.75" stroke="#CDCDCD" stroke-linecap="round"/>
                </svg>
              </button>
            </div>
          </div>

          <hr class="task-divider">
        </div>`,
        ),
      );
    }
  } catch (error) {
    console.log('error');
  }
};
