import React, {Component} from "react"

class TodosContainer extends Component{

	render(){
			return(
			<div>
        <div className="inputContainer">
          <input className="taskInput" type="text" placeholder="Add a task" maxLength="50"/>
        </div>
        <div className="listWrapper">
          <ul className="taskList">
            <li>lorem ipsum.</li>
          </ul>
        </div>
      </div>
		);
	}
}

export default TodosContainer