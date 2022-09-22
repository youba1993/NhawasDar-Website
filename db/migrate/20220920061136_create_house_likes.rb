class CreateHouseLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :house_likes do |t|
      t.integer :count

      t.timestamps
    end
  end
end
