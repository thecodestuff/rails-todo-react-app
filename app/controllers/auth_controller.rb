# source : https://levelup.gitconnected.com/jwt-auth-in-a-react-rails-app-8a7e6ba1ac0

class AuthController < ApplicationController
	skip_before_action :require_login, only: %i[login auto_login]

	def login
		user = User.find_by(email: params[:email])
		if user && user.authenticate(params[:password])
			# return payload to client
			payload = {user_id: user.id}
			token = encode_token(payload)
			render json: {user: user, jwt: token, status: 200, success: "welcome back"}
		else
			render json: {status: 401, error:['Login failed']}
		end
	end

  # Auto login user if sesion is valid
	def auto_login
		if session_user
			render json: session_user
		else
			render json: {errors: 'No User login'}
		end
	end

	def check_access
		render json: {status: 200 , message:"You are authorized"}
	end
end