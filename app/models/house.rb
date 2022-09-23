class House < ApplicationRecord
    belongs_to :landlord

    has_many :house_images
    has_many :house_likes
    has_many :house_reviews
    has_one  :contracts
    
    validates :adress,              presence: true
    validates :square_footage,      presence: true
    validates :price,               presence: true
    validates :house_type,          presence: true
    validates :num_beds,            presence: true
    validates :num_baths,           presence: true
    validates :air_cond,            presence: true
    validates :elevator,            presence: true
    validates :furnished,           presence: true
end
