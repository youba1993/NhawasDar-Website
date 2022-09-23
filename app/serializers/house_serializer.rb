class HouseSerializer < ActiveModel::Serializer
  attributes :adress, :square_footage, :price, :house_type, :num_beds, :num_baths, :air_cond, :elevator, :furnished
end
