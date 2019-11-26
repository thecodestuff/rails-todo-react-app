# follow up this tutorial
# https://medium.com/how-i-get-it/react-with-rails-user-authentication-8977e98762f2
class UsersController < ApplicationController
  def index
    @users = User.all
    if @users
      render json: {users: @users}
    else
      render json: {status: 500, errors:['no user found']}
    end
  end

  def show
    @user = User.find(params[:id])
    if @user
      render json: {user:@user}
    else
      render json: {status:500, errors:['no user found']}
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      # do something
    else
      render json:{status:500, errors: @user.errors.full_message}
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :email,
      :password,
      :password_confirmation
    )
  end
end
