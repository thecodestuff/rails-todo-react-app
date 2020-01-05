import React, {Component} from "react";
import axios from 'axios'; // api request package
import update from 'immutability-helper';
import ApiRequests from '../request/ApiRequests';

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
    ApiRequests.loadTodos().then(response => {
      this.setState({
        isLoaded: true,
        toos: response.data
      });
    }).catch(error => {
      this.state({ isLoaded:true, error });
    });
  }

  // create a new todo when enter 
  createTodo = (event) => {
    // call api POST /api/v1/todos when enter is press
    if(event.key === 'Enter'){
      axios.post('api/v1/todos', {todo: {title: event.target.value}}).then(response => {
        this.setState({
          todos: this.state.todos.concat(todo),
          inputValue: ''
        })
 
      }).catch(error => {
        this.setState({
          isLoaded: true,
          error
        })
        console.log("error while creating new task")
      })
    }
  }

  // Marked complete
  updateTodo = (event, id) => {
    axios.put(` api/v1/todos/${id}`, {todo: {done:event.target.checked}}).then(response => {
const todoIndex = this.state.todos.findIndex(x => x.id === response.data.id)
      const todos = update(this.state.todos, {
        [todoIndex]: {$set: response.data}
      })
      this.setState({
        todos: todos
      })    }).catch(error => {
      console.error(error)
    })
  }

  // Delete Todo
  deleteTodo = (event, id) => {
    axios.delete(`/api/v1/todos/${id}`).then(response => {
      console.log(id)
      console.log(this.state.todos)
      this.setState({
        todos: this.state.todos.filter(todo => todo.id !== id),
        error: null,
      })
    }).catch(error => {
      console.log(error)
    })
  }

	render(){
    const {todos} = this.state
			return(
			<div>
        <div className="inputContainer">
          <input className="taskInput"
            type="text" placeholder="Add a task" 
            maxLength="50" 
            onKeyPress={this.createTodo}  
            onChange={this.handleChange}
          />
          
        </div>
        <div className="listWrapper">
          <ul className="taskList">
            {
              todos.map((todo) => (
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

export default TodosContainer