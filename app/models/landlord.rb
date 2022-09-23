class Landlord < ApplicationRecord
    has_secure_password
    validates :email, uniqueness: true
    validates :company_name , uniqueness: true
    validates :company_phone, uniqueness: true

    has_many :houses 
    has_many :contracts

    has_many :users , through: :contracts
end
