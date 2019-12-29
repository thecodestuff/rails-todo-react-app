import React, {Component} from "react"
import update from 'immutability-helper'

class TodosComponent extends Component{
  constructor(props){
    super(props)

    this.state = {
      isLoaded: false,
      error: null,
      inputValue: '',
      todos:[]
    }
  }

	render(){
    const {todos, handleChange, inputValue, updateTodo, createTodo, deleteTodo} = this.props
    const mytodos = Array.from(todos)
      return(
      <div>
        <div><h1>Todo List</h1></div>
        <div className="inputContainer">
          <input className="taskInput"
            type="text" placeholder="Add a task"
            maxLength="50"
            onKeyPress={createTodo}
            onChange={handleChange}
            value={inputValue}
          />

        </div>
        <div className="listWrapper">
          <ul className="taskList">
            {
              mytodos.map((todo) => (
                <li className="task" todo={todo} key={todo.id}>

                  <input className="taskCheckbox" type="checkbox"
                    checked={todo.done}
                    onChange={(event) => updateTodo(event,todo.id)}
                  />

                  <label className={todo.done ? "title":""} >{todo.title}</label>
                  <span className="deleteTaskBtn" onClick={event => deleteTodo(event, todo.id)}>x</span>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default TodosComponent