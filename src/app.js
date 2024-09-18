import { getAllTodos, createTodo } from './firebase/features/todo';

let TODOS = [];
(async () => {
  TODOS = await getAllTodos();

  createTodo(TODOS, 'Test TASK');
})();
