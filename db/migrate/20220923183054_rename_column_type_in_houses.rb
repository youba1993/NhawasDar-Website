class RenameColumnTypeInHouses < ActiveRecord::Migration[6.1]
  def change
    rename_column :houses, :type, :house_type
  end
end
