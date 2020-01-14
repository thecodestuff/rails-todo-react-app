import { combineReducers } from 'redux'
import todosReducer from './index'
import authentication from './authReducer'

// using redux inbuilt combineReducer utility
const rootReducer = combineReducers({
	todos: todosReducer,
	auth : authentication
})

export default rootReducer;
