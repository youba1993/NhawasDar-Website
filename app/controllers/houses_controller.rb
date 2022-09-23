class HousesController < ApplicationController
  def index
    house = House.all
    render json:  house 
  end

  def create
    house = current_landlord.houses.create(house_params)
    if house.valid?
      render json: { house: HouseSerializer.new(house) }, status: :created
    else
      render json: { error: 'failed to add house' }, status: :unprocessable_entity
    end
  end

  private

  def house_params
    params.require(:house).permit(:adress, :square_footage, :price, :house_type, :num_beds, :num_baths, :air_cond, :elevator, :furnished) 
  end

end
