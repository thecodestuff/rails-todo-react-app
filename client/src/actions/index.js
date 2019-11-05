import {LOAD_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO} from ./constant.js

// Actions 
export  loadTodos = (todos) => {
  return {
    type:LOAD_TODOS,
    todos:todos
  }
}

