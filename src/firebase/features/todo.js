import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';

import { db } from '../config';
const todosCollectionRef = collection(db, 'todos');

export const getAllTodos = async () => {
  try {
    const data = await getDocs(todosCollectionRef);

    const todos = data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));

    return todos;
  } catch (error) {
    console.log(error.message);
  }
};

export const createTodo = async (todoData, todoToCreate) => {
  try {
    const newTaskTitle = todoToCreate.task_title;
    const isExist = todoData.find(item => item.task_title === newTaskTitle);

    if (isExist) {
      console.log(`Todo with title ${newTaskTitle} is already exist`);
      return;
    }

    const todoRef = await addDoc(collection(db, 'todos'), { ...todoToCreate });
    console.log('Success. Todo was created: id ', todoRef.id);
  } catch (e) {
    console.log(error.message);
  }
};

export const deleteTodo = async todoToRemoveId => {
  try {
    await deleteDoc(doc(db, 'todos', todoToRemoveId));
    console.log('Success. Todo was deleted: id ', todoToRemoveId);
  } catch (error) {
    console.log(error.message);
  }
};
