import {LOAD_TODOS, ADD_TODO, TOGGLE_TODO, DELETE_TODO} from '../actions/constant'

todosReducer = (state=[], actions) => {
  switch(action.type){
    case LOAD_TODOS:
      return action.todos
  }
}

export default todosReducer;
