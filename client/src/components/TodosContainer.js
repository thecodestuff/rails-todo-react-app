import React, {Component} from "react"
import axios from 'axios' // api request package

class TodosContainer extends Component{
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      error: null,
      todos:[]
    }
  }

  componentDidMount = () => {
    this.getTodos();
  }
  
  // Get list of todos from backend
  getTodos = () => {
    axios.get('/api/v1/todos').then( response => {
      this.setState({
        isLoaded:true,
        todos: response.data
      })
    }).catch( error => {
      this.setState({
        isLoaded: false,
        error
      })
    })
  }

	render(){
    const {todos} = this.state
			return(
			<div>
        <div className="inputContainer">
          <input className="taskInput"
            type="text" placeholder="Add a task" maxLength="50" onChange={this.handleChange}/>
          <button onClick={this.submitForm}>Add</button>
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