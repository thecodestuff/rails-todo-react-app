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
    case ADD_TODO:
      return [...state,
        {
           id: actions.id,
           title: actions.title,
           done: false
        }
      ];
    case TOGGLE_TODO:
      return state.map(todo => (todo.id === actions.index) ? { ...todo, done: !todo.done} : todo );
    default:
      return state
  }
}

//export default todosReducer;
