class HouseLikesController < ApplicationController
    wrap_parameters format: []

    def create
        count = HouseLike.where(house_id: like_params[:id]).length
        like = current_user.house_likes.create(house_id: like_params[:id],count: count+1 )
        render json: like
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
