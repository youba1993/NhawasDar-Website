class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create]

  def user_create
    @user = User.find_by(email: user_login_params[:email])
    #User#authenticate comes from BCrypt
    if @user && @user.authenticate(user_login_params[:password])
      # encode token comes from ApplicationController
      token = encode_token({ user_id: @user.id })
      render json: { user: UserSerializer.new(@user), jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end
  
  def landlord_create
    @landlord = Landlord.find_by(email: landlord_login_params[:email])
    if @landlord && @landlord.authenticate(landlord_login_params[:password])
      token = encode_token({ landlord_id: @landlord.id })
      render json: { landlord: LandlordSerializer.new(@landlord), jwt: token }, status: :accepted
    else
      render json: { message: 'Invalid email or password' }, status: :unauthorized
    end
  end

  private

  def user_login_params
    params.require(:user).permit(:email, :password)
  end

  def landlord_login_params
    params.require(:landlord).permit(:email, :password)
  end
end
