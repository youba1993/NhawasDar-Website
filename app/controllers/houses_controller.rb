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
    house = House.where(adress: params[:adress])
    if house != [] then 
      render json: house
    else
      render json: { error: "does't exist" }
    end
  end

  def landlord_index
    if current_landlord
    house = current_landlord.houses.all
    render json: house
    else
      render json: false
    end
  end

  def update
    house = House.find_by(id: params[:id])
    if house.valid?
      house.update(house_params)
      render json: house
    else
      render json: {error: "entre does not exist"}
    end
  end

  def destroy
    house = House.find_by(id: params[:id])
    if house
      house.destroy
      head :no_content
    else
      render json: {error: "entre does not found"}, status: :not_found
    end
  end

  private

  def house_params
    params.require(:house).permit(:adress, :square_footage, :price, :house_type, :num_beds, :num_baths, :air_cond, :elevator, :furnished) 
  end

end
