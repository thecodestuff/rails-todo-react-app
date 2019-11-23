import React, {Component} from 'react';
import './App.css';
//Importing components 
import TodosContainer from './containers/TodosContainer.js'

class App extends Component{
  render(){
    return (
      <div className="container">
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodosContainer />
      </div>
    );
  }
}

export default App;
