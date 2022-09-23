class LandlordSerializer < ActiveModel::Serializer
  attributes :first_name, :last_name, :company_name, :company_phone
end
