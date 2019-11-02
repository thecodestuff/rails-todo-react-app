import React, {Component} from "react"
import axios from 'axios' // api request package

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
      this.setState({
        isLoaded:true,
        todos: response.data
      })
      console.log(this.state.todos)
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
      axios.post('api/v1/todos', {todo: {title: event.target.value}}).then(response => {
        const todo = response.data
        console.log(this.state.todos)
        //Updating state with current todo
        this.setState({
          todos: this.state.todos.concat(todo),
          inputValue: ''
        })
        console.log(this.state.todos)
      }).catch(error => {
        this.setState({
          isLoaded: true,
          error
        })
        console.log("error while creating new task")
      })
    }
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
              todos.map((todo, index) => (
                <li key={index}>{todo.title}</li>
              ))
            }
          </ul>
        </div>
      </div>
		);
	}
}

export default TodosContainer