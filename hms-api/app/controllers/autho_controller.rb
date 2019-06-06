class AuthoController < ApplicationController
    # include BCrypt

    def login
    # binding.pry
    # user_id = @user.id
    # user_img = @user.image
    # this_user = {id: user_id, username: user, image: user_img}
    user = params[:autho][:email]
    @user = User.find_by(email: user)
    # binding.pry
    if @user 
    password = params[:autho][:password]
    autho = @user.authenticate(password)
      if autho  
      render json: @user, status: :ok
      else 
      render json: {errors: "Username/password not found"}    
      end 
     else 
      render json: {errors: "Username/password doesn't exists"}    
    end
    end
    # token = JWT.encode this_user, password, 'HS256'
    # binding.pry

end