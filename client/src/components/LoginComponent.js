import React, {Component} from 'react'
import ApiRequest from '../requests/ApiRequest'

class Login extends Component{
  constructor() {
  	super();
  	this.state = {
  		email: 'admin@email.com',
  		password: 'admin'
  	}
  }

  handleLogin() {
  	ApiRequest.login().then(res => {
  		console.log(res.data)
  		localStorage.clear();
  		localStorage.setItem('token', JSON.stringify(res.data))
  		// localStorage.setItem('token', res.data.jwt)
  	});
  }

  render(){
    return(
      <div>
         <h1>Login To Dashboard</h1>
         <button onClick= {this.handleLogin}>Login</button>
      </div>
    );
  }
}
export default Login;
