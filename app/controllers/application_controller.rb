class ApplicationController < ActionController::API
	before_action :require_login

	def logged_in?
		!!session_user
	end

	def require_login
		render json: {message: 'Please login'}, status: :unauthorized unless logged_in?
	end

	# Get header from incoming request
	def auth_header
	  request.headers['Authorization']
	end

  # return encode jwt token
	def encode_token(payload)
		JWT.encode(payload, 'my_secret')
	end

	# decode token
	def decoded_token
		if auth_header
			token = JSON.parse(auth_header)
		end
	end

  # return session
	def session_user
		decoded_hash = decoded_token()
		if !decoded_hash.empty?
			user_id = decoded_hash['user']['id'].to_i
			@user = User.find_by(id: user_id)
		else
			nil
		end
	end

end
