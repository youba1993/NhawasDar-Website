class HouseLike < ApplicationRecord
    belongs_to :user
    belongs_to :house

    validates :house_id, uniqueness: { scope: :user_id,
    message: "should have one like" }
end
