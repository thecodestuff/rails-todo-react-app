import React, {Component} from 'react';
//Importing components 
import TodoContainer from './components/TodosContainer.js'

class App extends Component{
  render(){
    return (
      <div className="container">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodoContainer />
      </div>
    );
  }
}

export default App;
