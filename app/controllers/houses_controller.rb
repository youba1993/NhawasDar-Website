class HousesController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  def index
    house = House.all
    render json: house , status: 200
  end

  def create
    house = current_landlord.houses.create(house_params)
    if house.valid?
      render json: { house: HouseSerializer.new(house) }, status: :created
    else
      render json: { error: 'failed to add house' }, status: :unprocessable_entity
    end
  end

  def show
    
  end

  def update

  end

  def destroy

  end

  private

  def house_params
    params.require(:house).permit(:adress, :square_footage, :price, :house_type, :num_beds, :num_baths, :air_cond, :elevator, :furnished) 
  end

end
