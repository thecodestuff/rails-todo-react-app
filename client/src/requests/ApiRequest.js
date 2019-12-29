import {request} from 'axios';

export default { 
	getTodos(){
		return(
			request({
				method:'get',
				url: '/api/v1/todos'
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
