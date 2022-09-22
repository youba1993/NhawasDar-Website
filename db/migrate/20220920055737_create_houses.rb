class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.string :adress
      t.integer :square_footage
      t.integer :price
      t.string :type
      t.integer :num_beds
      t.integer :num_baths
      t.boolean :air_cond
      t.boolean :elevator
      t.boolean :furnished

      t.timestamps
    end
  end
end
