class CreateHouseImages < ActiveRecord::Migration[6.1]
  def change
    create_table :house_images do |t|
      t.string :image_url
      t.string :file_name
      t.text :description

      t.timestamps
    end
  end
end
