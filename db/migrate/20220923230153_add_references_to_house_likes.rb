class AddReferencesToHouseLikes < ActiveRecord::Migration[6.1]
  def change
    add_reference :house_likes, :user
    add_reference :house_likes, :house
  end
end
