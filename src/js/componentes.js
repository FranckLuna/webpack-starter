import {Todo, TodoList} from '../clases';
import { todoList } from '../index';


// referencias en el html
const divTodoList = document.querySelector('.todo-list');
const txtInput = document.querySelector('.new-todo');


export const crearTodoHtml = ( todo ) =>{
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="abc">
			<div class="view">
				<input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
				<label> ${ todo.tarea } </label>
				<button class="destroy"></button>
			</div>
		<input class="edit" value="Create a TodoMVC template">
	</li>`

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append( div.firstElementChild );
    
    return div.firstElementChild;
}
//eventos 

txtInput.addEventListener('keyup', (event) => {

    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {
        //console.log( txtInput.value );
        
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        txtInput.value = '';
    }

});