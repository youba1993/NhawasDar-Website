class HouseSerializer < ActiveModel::Serializer
  attributes :id, :adress, :square_footage, :price, :house_type, :num_beds, :num_baths, :air_cond, :elevator, :furnished, :image_url
end
