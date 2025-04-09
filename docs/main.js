/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clases/index.js":
/*!*****************************!*\
  !*** ./src/clases/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* reexport safe */ _todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo),\n/* harmony export */   TodoList: () => (/* reexport safe */ _todo_list_class__WEBPACK_IMPORTED_MODULE_1__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/clases/todo.class.js\");\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class */ \"./src/clases/todo-list.class.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-inicial/./src/clases/index.js?");

/***/ }),

/***/ "./src/clases/todo-list.class.js":
/*!***************************************!*\
  !*** ./src/clases/todo-list.class.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoList: () => (/* binding */ TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/clases/todo.class.js\");\n\r\n\r\nclass TodoList{\r\n\r\n    constructor(){\r\n        \r\n        this.cargarLocalStorage();\r\n\r\n    }\r\n\r\n    nuevoTodo(todo){\r\n        this.todos.push(todo);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    eliminarTodo( id ){\r\n        this.todos = this.todos.filter( todo => todo.id != id);\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    marcarCompletado( id ){\r\n        for( const todo of this.todos) {\r\n            if (todo.id == id ){\r\n                todo.completado = !todo.completado;\r\n                this.guardarLocalStorage();\r\n                break;\r\n            }\r\n        }\r\n    }\r\n\r\n    eliminarCompletados(){\r\n        this.todos = this.todos.filter( todo => !todo.completado );\r\n        this.guardarLocalStorage();\r\n    }\r\n\r\n    guardarLocalStorage(){\r\n        localStorage.setItem('todo', JSON.stringify( this.todos) );\r\n\r\n    }\r\n\r\n    cargarLocalStorage(){\r\n\r\n        this.todos = ( localStorage.getItem('todo') ) \r\n                        ? JSON.parse( localStorage.getItem( 'todo' )) \r\n                        : [];\r\n\r\n        this.todos = this.todos.map( obj => _todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo.fromJson( obj ) );\r\n        //this.todos = this.todos.map( Todo.fromJson );\r\n    \r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-inicial/./src/clases/todo-list.class.js?");

/***/ }),

/***/ "./src/clases/todo.class.js":
/*!**********************************!*\
  !*** ./src/clases/todo.class.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo{\r\n\r\n    static fromJson( {id, tarea, completado, creado} ){\r\n\r\n        const tempTodo = new Todo( tarea );\r\n\r\n        tempTodo.id = id;\r\n        tempTodo.tarea = tarea;\r\n        tempTodo.completado = completado;\r\n        tempTodo.creado = creado;\r\n\r\n        return tempTodo;\r\n    }\r\n\r\n    constructor( tarea ){\r\n        this.tarea = tarea;\r\n\r\n        this.id = new Date().getTime(); //123456789\r\n        this.completado = false;\r\n        this.creado = new Date();\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-inicial/./src/clases/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _clases__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clases */ \"./src/clases/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\r\n\r\n\r\n\r\nconst todoList = new _clases__WEBPACK_IMPORTED_MODULE_1__.TodoList();\r\n\r\ntodoList.todos.forEach( todo => (0,_js_componentes__WEBPACK_IMPORTED_MODULE_2__.crearTodoHtml)( todo ) );\r\n\r\nconsole.log(todoList.todos);\r\n\r\n//todoList.todos.forEach(crearTodoHtml);\n\n//# sourceURL=webpack://webpack-inicial/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   crearTodoHtml: () => (/* binding */ crearTodoHtml)\n/* harmony export */ });\n/* harmony import */ var _clases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clases */ \"./src/clases/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\r\n\r\n\r\n\r\n// referencias en el html\r\nconst divTodoList = document.querySelector('.todo-list');\r\nconst txtInput = document.querySelector('.new-todo');\r\nconst btnBorrar = document.querySelector('.clear-completed');\r\nconst ulFiltros = document.querySelector('.filters');\r\nconst anchorFiltros = document.querySelectorAll('.filtro');\r\n\r\n\r\nconst crearTodoHtml = ( todo ) =>{\r\n    const htmlTodo = `\r\n    <li class=\"${ (todo.completado) ? 'completed' : '' }\" data-id=\"${todo.id}\">\r\n\t\t\t<div class=\"view\">\r\n\t\t\t\t<input class=\"toggle\" type=\"checkbox\" ${ (todo.completado) ? 'checked' : '' }>\r\n\t\t\t\t<label> ${ todo.tarea } </label>\r\n\t\t\t\t<button class=\"destroy\"></button>\r\n\t\t\t</div>\r\n\t\t<input class=\"edit\" value=\"Create a TodoMVC template\">\r\n\t</li>`\r\n\r\n    const div = document.createElement('div');\r\n    div.innerHTML = htmlTodo;\r\n    divTodoList.append( div.firstElementChild );\r\n    \r\n    return div.firstElementChild;\r\n}\r\n//eventos \r\n\r\ntxtInput.addEventListener('keyup', (event) => {\r\n\r\n    if ( event.keyCode === 13 && txtInput.value.length > 0 ) {\r\n        //console.log( txtInput.value );\r\n        \r\n        const nuevoTodo = new _clases__WEBPACK_IMPORTED_MODULE_0__.Todo( txtInput.value );\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.nuevoTodo( nuevoTodo );\r\n\r\n        crearTodoHtml( nuevoTodo );\r\n        txtInput.value = '';\r\n    }\r\n\r\n});\r\n\r\ndivTodoList.addEventListener('click', (event) =>{\r\n    const nombreElemento = event.target.localName; //imput , label, boton\r\n    const todoElemento = event.target.parentElement.parentElement;\r\n    const todoId = todoElemento.getAttribute('data-id');\r\n    //console.log(nombreElemento);\r\n\r\n    if(nombreElemento.includes('input')){\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.marcarCompletado(todoId);\r\n        todoElemento.classList.toggle('completed');\r\n\r\n    } else if( nombreElemento.includes('button') ){\r\n\r\n        _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarTodo(todoId);\r\n        divTodoList.removeChild( todoElemento );\r\n        \r\n    }\r\n});\r\n\r\n//borrar completado \r\nbtnBorrar.addEventListener( 'click', () => {\r\n    _index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarCompletados();\r\n\r\n    for(let i = divTodoList.children.length-1; i >=0; i-- ){\r\n        const elemento = divTodoList.children[i];\r\n\r\n        if(elemento.classList.contains('completed')){\r\n            divTodoList.removeChild(elemento);\r\n        }\r\n\r\n    }\r\n});\r\n\r\nulFiltros.addEventListener('click', (event) => {\r\n    console.log(event.target.text);\r\n\r\n    const filtro = event.target.text;\r\n\r\n    if( !filtro ) { return; }\r\n\r\n    anchorFiltros.forEach( elem => elem.classList.remove('selected'));\r\n    event.target.classList.add('selected');\r\n\r\n    for( const elemento of divTodoList.children ){\r\n        elemento.classList.remove('hidden');\r\n\r\n        const completado = elemento.classList.contains('completed');\r\n\r\n        switch( filtro ){\r\n            case 'Pendientes':\r\n                if(completado){\r\n                    elemento.classList.add('hidden');\r\n                }\r\n            break;\r\n            \r\n            case 'Completados':\r\n                if( !completado ){\r\n                    elemento.classList.add('hidden');\r\n                }\r\n            break;\r\n            }\r\n\r\n        }\r\n});\n\n//# sourceURL=webpack://webpack-inicial/./src/js/componentes.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack-inicial/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;