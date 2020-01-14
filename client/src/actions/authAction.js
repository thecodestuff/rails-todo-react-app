import { AUTHENTICATE } from './constant'

export function authenticate(email, password) {
	return { type: AUTHENTICATE, email: email, password: password }
}