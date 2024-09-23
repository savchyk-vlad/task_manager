import { collection, addDoc, getDocs } from 'firebase/firestore';

import { db } from '../config';
const todosCollectionRef = collection(db, 'todos');
const loader = document.getElementById('svg-loader');

const hideLoader = () => (loader.style.opacity = 0);
const showLoader = () => (loader.style.opacity = 1);

export const getAllTodos = async () => {
  try {
    showLoader();
    const data = await getDocs(todosCollectionRef);

    const todos = data.docs.map(doc => ({
      ...doc.data(),
      id: doc.id,
    }));

    hideLoader();
    return todos;
  } catch (error) {
    console.error('Error geting document: ', e);
  }
};

export const createTodo = async (todoData, todoToCreate) => {
  try {
    showLoader();
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
