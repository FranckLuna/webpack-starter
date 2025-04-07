import './style.css';
import {Todo, TodoList} from './clases';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

const tarea = new Todo('Aprender javaScript !!!!');

todoList.nuevoTodo( tarea );

console.log( todoList );

crearTodoHtml(tarea);