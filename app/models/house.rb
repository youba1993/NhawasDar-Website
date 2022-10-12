class House < ApplicationRecord
    belongs_to :landlord

    has_many :house_images  , dependent: :destroy
    has_many :house_likes   , dependent: :destroy
    has_many :house_reviews , dependent: :destroy
    has_one  :contracts     , dependent: :destroy
    
    validates :adress,              presence: true
    validates :square_footage,      presence: true
    validates :price,               presence: true
    validates :house_type,          presence: true
    validates :num_beds,            presence: true
    validates :num_baths,           presence: true
    
end
