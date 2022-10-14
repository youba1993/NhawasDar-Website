class House < ApplicationRecord
    belongs_to :landlord

    has_many :house_images  , dependent: :destroy
    has_many :house_likes   , dependent: :destroy
    has_many :house_reviews , dependent: :destroy
    has_one  :contracts     
    
    validates :adress,              presence: true
    validates :square_footage,      presence: true
    validates :price,               presence: true
    validates :house_type,          presence: true
    validates :num_beds,            presence: true
    validates :num_baths,           presence: true

    def self.ik_upload(image_params)
        @imagekitio = ImageKitIo.client
        file = image_params[:picture]
        file_name = image_params[:file_name]
        
        response = @imagekitio.upload_file(
            file: file, # required
            file_name: file_name,  # required
            response_fields: 'isPrivateFile, tags',
            tags: %w[abc def],
            use_unique_file_name: true
        )

        @url = JSON.parse(response[:raw_body])["url"]
        {image_url: @url,:adress => image_params[:adress], :square_footage => image_params[:square_footage], :price => image_params[:price], :house_type => image_params[:house_type], :num_beds => image_params[:num_beds], :num_baths => image_params[:num_baths], :air_cond => image_params[:air_cond], :elevator => image_params[:elevator], :furnished => image_params[:furnished]}
    end
    
end
