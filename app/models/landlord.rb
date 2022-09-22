class Landlord < ApplicationRecord
    has_secure_password

    has_many :houses 
    has_many :contracts

    has_many :users , through: :contracts
end
