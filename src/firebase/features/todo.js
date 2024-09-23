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
    console.error('Error geting document: ', e);
  }
};

export const createTodo = async (todoData, todoToCreate) => {
  try {
    const isExist = todoData.find(
      item => item.task_title === todoToCreate.task_title,
    );

    if (isExist) {
      console.log(
        `Todo with title ${todoToCreate.task_title} is already exist`,
      );
      return;
    }

    const todoRef = await addDoc(collection(db, 'todos'), { ...todoToCreate });

    console.log('Success. Todo was created: id ', todoRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

export const deleteTodo = async todoToRemoveId => {
  try {

    console.log(todoToRemoveId)
    await deleteDoc(doc(db, 'todos', todoToRemoveId));
  } catch (error) {
    console.log(error);
  }
};
