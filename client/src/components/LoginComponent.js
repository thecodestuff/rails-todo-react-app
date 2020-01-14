import React, {Component} from 'react'
//import ApiRequest from '../requests/ApiRequest'
import { connect } from 'react-redux';
import { authenticate } from '../actions/authAction';

class Login extends Component{
  constructor(props) {
  	super(props);
  	this.state = {
  	  email: '',
  	  password: '',
      error: null,
      redirect: false,
  	}
  }

  handleLogin() {
  	const {email, password} = this.state
  	this.props.dispatch(authenticate(email, password))
  }

  /**
   * when form is submit
   */
  handleSubmit = (e) => {
    e.preventDefault()
    this.handleLogin()
    
  }

  handleChange = (event) => {
  	const {name, value} = event.target
  	this.setState( {[name]: value } )
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
             <input type="password" name="password" value={password} placeholder="Email" onChange={this.handleChange} />
             <br/>
             <input type="submit" name="submit" value="Login"/>
           </form>
         </div>
      </div>
    );
  }
}

// TODO :: manual dispatch to props
// const mapDispatchToProps = dispatch => ({
// 	authentication: () => { dispatch(authenticate()) }
// })

export default connect()(Login);
