import { combineReducers } from 'redux'
import todosReducer from './index'

// using redux inbuilt combineReducer utility
const rootReducer = combineReducers({
	todos: todosReducer
})

export default rootReducer;
