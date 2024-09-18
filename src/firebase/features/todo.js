import { collection, addDoc, getDocs } from 'firebase/firestore';

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

export const createTodo = async (todoData, todoTitle) => {
  try {
    const isExist = todoData.find(todo => todo.title === todoTitle);

    if (isExist) {
      console.log(`Todo with title ${todoTitle} is already exist`);
      return;
    }

    const todoRef = await addDoc(collection(db, 'todos'), {
      title: todoTitle,
    });

    console.log('Success. Todo was created: id ', todoRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
