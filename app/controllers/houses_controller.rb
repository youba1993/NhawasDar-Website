class HousesController < ApplicationController
  skip_before_action :authorized, only: [:index, :show]

  def index
    house = House.all
    render json: house , status: 200
  end

  def create
    ex_params = House.ik_upload house_params
    house = current_landlord.houses.create(ex_params)
    if house.valid?
      render json: { house: HouseSerializer.new(house) }, status: :created
    else
      render json: { error: 'failed to add house' }, status: :unprocessable_entity
    end
  end

  def show
    house = House.where(adress: params[:adress])
    if house 
      render json: house
    else
      render json: { error: "does't exist" },  status: :not_found
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
      render json: {error: "entre does not exist"}, status: :not_found
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
    params.permit(:adress, :square_footage, :price, :house_type, :num_beds, :num_baths, :air_cond, :elevator, :furnished, :picture, :file_name) 
  end

end
