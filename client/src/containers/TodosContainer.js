import React, {Component} from "react"
import axios from 'axios' // api request package
import update from 'immutability-helper'
import {connect} from 'react-redux'
// importing actions
import {loadTodos, addTodo, toggleTodo, deleteTodo} from '../actions/index'

class TodosContainer extends Component{
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      error: null,
      inputValue: '',
      todos:[]
    }
  }

  handleChange = event => {
    const {value} = event.target
    this.setState({
      inputValue:value
    })
  }

  componentDidMount = () => {
    this.getTodos();
  }

  // Get list of todos from /api/v1/todos endpoint
  getTodos = () => {
    axios.get('/api/v1/todos').then( response => {
      this.props.dispatch(loadTodos(response.data));
    }).catch( error => {
      this.setState({
        isLoaded: true,
        error
      })
      console.log(this.state.error)
    })
  }

  // create a new todo when enter
  createTodo = (event) => {
    // call api POST /api/v1/todos when enter is press
    if(event.key === 'Enter'){
      axios.post('api/v1/todos', {todo: {title: event.target.value}})
           .then(response => {
             const {id, title} = response.data
              this.props.dispatch(addTodo(id, title))
              this.setState({inputValue: ''})
      }).catch(error => {
        console.log(error)
      })
    }
  }

  // Marked complete
  updateTodo = (event, id) => {
    this.props.dispatch(toggleTodo(id))
    axios.put(`/api/v1/todos/${id}`).then(response => {
      console.log("updated..")
    }).catch(error => console.log("Not able to update..."+ error))
  }

  deleteTodo = (event, id) => {
    this.props.dispatch(deleteTodo(id));
    // deleting from backend
    axios.delete(`/api/v1/todos/${id}`).then(response => {
      console.log(response.data)
    }).catch(error => console.log("Not able to delete "+ error))
  }

	render(){
    //const {todos} = this.state
    const {todos} = this.props
    const mytodos = Array.from(todos)
			return(
			<div>
        <div className="inputContainer">
          <input className="taskInput"
            type="text" placeholder="Add a task"
            maxLength="50"
            onKeyPress={this.createTodo}
            onChange={this.handleChange}
            value={this.state.inputValue}
          />

        </div>
        <div className="listWrapper">
          <ul className="taskList">
            {
              mytodos.map((todo) => (
                <li className="task" todo={todo} key={todo.id}>

                  <input className="taskCheckbox" type="checkbox"
                    checked={todo.done}
                    onChange={(event) => this.updateTodo(event,todo.id)}
                  />

                  <label className={todo.done ? "title":""} >{todo.title}</label>
                  <span className="deleteTaskBtn" onClick={event => this.deleteTodo(event, todo.id)}>x</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
		);
	}
}

// map state to props object
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer)
