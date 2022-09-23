class AddReferencesToHouseReviews < ActiveRecord::Migration[6.1]
  def change
    add_reference :house_reviews, :user
    add_reference :house_reviews, :house
  end
end
