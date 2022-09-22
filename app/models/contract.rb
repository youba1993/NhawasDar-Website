class Contract < ApplicationRecord
    belongs_to :house
    belongs_to :landlord
    belongs_to :user
end
