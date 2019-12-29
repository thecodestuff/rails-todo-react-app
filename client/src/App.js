import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Login from './components/LoginComponent'
import LogOutComponent from './components/LogOutComponent'
import './App.css';
//Importing components
import TodosContainer from './containers/TodosContainer.js'

class App extends Component{
  render(){
    return (
      <div className="container">
      <div>
       <Router>
         <div className="header">
           <ul>
             <li><Link to="/">Login</Link></li>
             <li><Link to="/logout">Logout</Link></li>
             <li><Link to="/todo">Your todo list</Link></li>
           </ul>
         </div>

         <hr/>
         <Switch>
           <Route exact= "true" path="/"><Login/></Route>
           <Route path="/logout"><LogOutComponent /></Route>
           <Route path="/todo"><TodosContainer /></Route>
         </Switch>
        </Router>
      </div>
       
      </div>
    );
  }
}

export default App;
