class AddHouseToHouseImages < ActiveRecord::Migration[6.1]
  def change
    add_reference :house_images, :house
  end
end
