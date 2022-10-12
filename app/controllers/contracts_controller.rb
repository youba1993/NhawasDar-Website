class ContractsController < ApplicationController
    wrap_parameters format: []

    def index 
        contract = current_user.contracts.all
        render json: contract
    end

    def landlord_index
        contract = current_landlord.contracts.all
        render json: contract
    end

    def create
        house = House.where(id: contact_params[:id]).as_json.first.to_options
        contract = current_user.contracts.create(house_id: contact_params[:id], rent_amount: contact_params[:amount],landlord_id: house[:landlord_id], validateContract: contact_params[:validateContract] )
        if contract.valid?
            render json: contract, status: :created
          else
            render json: { error: 'failed' }, status: :unprocessable_entity
          end
    end

    def update
        contract = Contract.find_by(id: contact_params[:id])
        if contract
        contract.update(contact_params)
        render json: contract
        else
        render json: {error: "entre does not exist"}, status: :not_found
        end
    end

    def destroy
        contract = Contract.find_by(id: contact_params[:id])
        if contract
            contract.destroy
            render json: contact_params[:id]
        else 
            render json: {error: "doesn't exist"}, staus: :not_found
        end
    end

    private 

    def contact_params
        params.permit(:id , :amount, :validateContract)
    end

end
