import {request} from 'axios';

// getToken() {
//   	const token = localStorage.getItem('token') == null
//   	              ? JSON.stringify({})
//                   :localStorage.getItem('token')
//     return token
// }

export default {

	checkAccess() {
		// console.log("check access "+token);
		return(
			request({
				method: 'GET',
				url: '/api/v1/check_access',
				headers: {Authorization: localStorage.getItem('token') == null ? " " : localStorage.getItem('token')},
				responseType: 'json',
			})
		);
	},

	loadTodos(){
		return(
			request({
				method:'GET',
				url: '/api/v1/todos',
				headers: {Authorization: localStorage.getItem('token') == null ? " " : localStorage.getItem('token')},
			})
		);
	},

	login() {
		return request({
			method: 'POST',
			url: '/api/v1/login',
			headers: {"Content-Type": "application/json", "Accept": "application/json"},
			responseType: 'json',
			data: {email:'admin@email.com', password:'admin'}
		});
	},

	logout() {
		console.log("logging you out...")
	}

}
