class AddValidToContracts < ActiveRecord::Migration[7.0]
  def change
    add_column :contracts, :validateContract , :boolean
  end
end
