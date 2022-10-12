class HouseReviewsController < ApplicationController
    wrap_parameters format: []

    def create
        review = current_user.house_reviews.create(house_id: review_params[:id], comment: review_params[:comment])
        if review
            render json: review
        else
            render json: false
        end 
    end

    def show 
        review = HouseReview.where(house_id: review_params[:id])
        if review
            render json: review
        else
            render json: { error: "doesn't exist" }, status: :not_found
        end 
    end

    def update
        review = current_user.house_reviews.find_by(house_id: review_params[:id])
        if review
        review.update(review_params)
        render json: review
        else
        render json: {error: "entre does not exist"}, status: :not_found
        end
    end

    def destroy
        review = HouseReview.find_by(house_id: review_params[:id])
        if review
            review.destroy
            render json: review_params[:id]
        else 
            render json: {error: "doesn't exist"}, status: :not_found
        end 
    end

    private

    def review_params
        params.permit(:id, :comment)
    end
end
