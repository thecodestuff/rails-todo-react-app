class ApplicationController < ActionController::API

  # return encode jwt token
	def encode_token(payload)
		JWT.encode(payload, 'my_secret')
	end
end
