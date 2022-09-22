class House < ApplicationRecord

    has_many :house_images
    has_many :house_likes
    has_many :house_reviews
    has_one  :contract

    has_many :users , through: :house_likes
    has_many :users , through: :house_reviews
    
    has_one :user , through: :contract
    has_one :landlord , through: :contract

    belongs_to :contract
end
