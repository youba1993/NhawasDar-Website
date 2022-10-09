class DeleteColumnFromContracts < ActiveRecord::Migration[6.1]
  def change
    remove_column :contracts, :sign_data
    remove_column :contracts, :valid_until
  end
end
