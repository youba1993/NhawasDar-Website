class AddLandlordToHouses < ActiveRecord::Migration[6.1]
  def change
    add_reference :houses, :landlord
  end
end
