class Contract < ApplicationRecord
    belongs_to :landlord
    belongs_to :user

    validates :house_id, uniqueness: { scope: :user_id,
    message: "should have one Contract" }
    
end
