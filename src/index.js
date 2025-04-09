import './style.css';
import {Todo, TodoList} from './clases';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml( todo ) );

console.log(todoList.todos);

//todoList.todos.forEach(crearTodoHtml);