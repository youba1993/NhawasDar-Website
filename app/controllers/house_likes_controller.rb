class HouseLikesController < ApplicationController
    wrap_parameters format: []

    def index
        like = current_user.house_likes.all 
        if like
        render json: like, include: [:house]
        else 
            render json: { error: 'failed' }, status: :unprocessable_entity
        end
    end

    def create
        count = HouseLike.where(house_id: like_params[:id]).length
        like = current_user.house_likes.create(house_id: like_params[:id],count: count+1 )
        if like.valid?
            render json: like, status: :created
          else
            render json: { error: 'failed' },  status: :not_found
          end
    end

    def show 
        count = HouseLike.where(house_id: like_params[:id]).length
        like = current_user.house_likes.find_by(house_id: like_params[:id])
        if like
            render json: {count: count ,like: true}
        else
            render json: {count: count ,like: false}
        end 
    end

    def destroy
        like = HouseLike.find_by(house_id: like_params[:id])
        if like
            like.destroy
            head :no_content
        else 
            render json: {error: "doesn't exist"}
        end 
    end

    private

    def like_params
        params.permit(:id)
    end

end
