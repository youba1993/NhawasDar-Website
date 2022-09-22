class CreateLandlords < ActiveRecord::Migration[6.1]
  def change
    create_table :landlords do |t|
      t.string :first_name
      t.string :last_name
      t.string :company_name
      t.string :email
      t.integer :company_phone
      t.string :password_digest

      t.timestamps
    end
  end
end
