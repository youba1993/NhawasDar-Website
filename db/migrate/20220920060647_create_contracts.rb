class CreateContracts < ActiveRecord::Migration[6.1]
  def change
    create_table :contracts do |t|
      t.datetime :valid_until
      t.float :rent_amount
      t.datetime :sign_data

      t.timestamps
    end
  end
end
