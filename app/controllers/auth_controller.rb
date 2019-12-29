class AuthController < ApplicationController

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
end