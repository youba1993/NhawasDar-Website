class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorized
  
  def encode_token(payload)
    # should store y0uB@ in env variable
    JWT.encode(payload, 'y0uB@')
  end

  def auth_header
    # { Authorization: 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # header: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'y0uB@', true, algorithm: 'HS256')
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
      user_id = decoded_token[0]['user_id']
      @user = User.find_by(id: user_id)
    end
  end

  def current_landlord
    if decoded_token
      landlord_id = decoded_token[0]['landlord_id']
      @landlord = Landlord.find_by(id: landlord_id)
    end
  end

  def logged_in?
    if current_user
      !!current_user
    elsif current_landlord
      !!current_landlord
    else false
    end
  end

  def profile 
    if current_user
      render json: { user: UserSerializer.new(current_user) }, status: :accepted
    elsif current_landlord
      render json: { landlord: LandlordSerializer.new(current_landlord) }, status: :accepted
    else false
    end
  end 

  def authorized
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
