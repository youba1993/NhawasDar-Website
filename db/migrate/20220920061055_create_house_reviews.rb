class CreateHouseReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :house_reviews do |t|
      t.text :comment

      t.timestamps
    end
  end
end
