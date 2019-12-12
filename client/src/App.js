import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './components/LoginComponent'
import './App.css';
//Importing components
import TodosContainer from './containers/TodosContainer.js'

class App extends Component{
  render(){
    return (
      <div className="container">
      <div>
       <Router>
         <div>
         <ul>
           <li><Link to="/login">Login</Link></li>
           <li><Link to="/logout">Sign Up</Link></li>
         </ul>
         </div>

         <hr/>
         <Switch>
           <Route path="/login"><Login/></Route>
         </Switch>
        </Router>
      </div>
        <div className="header">
          <h1>Todo List</h1>
        </div>
        <TodosContainer />
      </div>
    );
  }
}

export default App;
