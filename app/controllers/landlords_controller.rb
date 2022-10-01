class LandlordsController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @landlord = Landlord.create(landlord_params)
    if @landlord.valid?
      @token = encode_token({ landlord_id: @landlord.id })
      render json: { landlord: LandlordSerializer.new(@landlord), jwt: @token }, status: :created
    else
      render json: { error: 'failed to create landlord' }, status: :unprocessable_entity
    end
  end

  private

  def landlord_params
    params.require(:landlord).permit(:first_name, :last_name,:company_name,:company_phone,:email, :password, :password_confirmation)
  end



end
