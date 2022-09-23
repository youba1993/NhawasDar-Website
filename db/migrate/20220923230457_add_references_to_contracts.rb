class AddReferencesToContracts < ActiveRecord::Migration[6.1]
  def change
    add_reference :contracts, :user
    add_reference :contracts, :house
    add_reference :contracts, :landlord
  end
end
