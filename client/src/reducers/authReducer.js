import {AUTHENTICATE} from '../actions/constant'
import ApiRequest from '../requests/ApiRequest'

const initialState = {
	email: '',
	password: '',
	error: null,
	redirect: false
};

export default function authentication(state=initialState, actions) {
	switch(actions.type){
	  case 'AUTHENTICATE':
	    ApiRequest.login().then( res => {
  	    localStorage.clear();
  	    localStorage.setItem('token', JSON.stringify(res.data))
  	    localStorage.setItem('token', res.data.jwt)
	    });

	  default:
	    return state
	}
}
