import {LOAD_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../actions/constant'
const intialState = {
      isLoaded: false,
      error: null,
      inputValue: '',
      todos:[]
}

export default function todosReducer(state=intialState, actions){
  switch(actions.type){
    case LOAD_TODOS:
      return actions.todos
    default:
      return state
  }
}

//export default todosReducer;
