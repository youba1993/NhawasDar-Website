class AddImageUrlToHouse < ActiveRecord::Migration[7.0]
  def change
    add_column :houses, :image_url , :string
  end
end
