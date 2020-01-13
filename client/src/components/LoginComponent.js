import React, {Component} from 'react'
import ApiRequest from '../requests/ApiRequest'

class Login extends Component{
  constructor() {
  	super();
  	this.state = {
  		email: 'admin@email.com',
  		password: 'admin',
      error: null
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

  changeValue() {
    this.setState({email:'', password:'', error:''});
  }

  /**
   * when form is submit
   */
  handleSubmit = (e) => {
    // code here
    // call handleLogin()
    // do something
  }

  handleChange = (event, type) => {
    if(type=='email')
      //email = event.target.value
    else 
      //passowrd = event.target.password

   // set to state
  }

  render(){
    return(
      <div className="login-wrapper">
         <h1>Login To Dashboard</h1>
         <button onClick= {this.handleLogin}>Login</button>
         <div className="loginForm">
           <form onSubmit={this.handleSubmit} name="submit" className="login">
             <label>Email</lable>
             <input name="email" value={email} placeholder="Email" onChange={this.handleChange} />
           </form>
         </div>
      </div>
    );
  }
}
export default Login;
