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
    e.preventDefault()
    
  }

  handleChange = (event, type) => {
    //if(type=='email')
      //email = event.target.value
    //else
      //passowrd = event.target.password

   // set to state
  }

  render(){
    let {email,password} = this.state
    return(
      <div className="login-wrapper">
         <h1>Login To Dashboard</h1>
         <div className="loginForm">
           <form onSubmit={this.handleSubmit} name="submit" className="login">
             <label>Email</label>
             <input type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange} />
             <br/>
             <label>Password</label>
             <input type="password" name="email" value={password} placeholder="Email" onChange={this.handleChange} />
             <br/>
             <input type="submit" name="submit" value="Login"/>
           </form>
         </div>
      </div>
    );
  }
}
export default Login;
