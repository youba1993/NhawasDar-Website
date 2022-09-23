class User < ApplicationRecord
    has_secure_password
    validates :email, uniqueness: true

    has_many :house_reviews
    has_many :house_likes
    has_many :contracts

    has_many :houses , through: :house_likes
    has_many :houses , through: :house_reviews
    has_many :houses , through: :contracts
    has_many :landlords , through: :contracts

end
