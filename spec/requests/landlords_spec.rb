require 'rails_helper'

RSpec.describe "Landlords", type: :request do
  describe "GET /create" do
    it "returns http success" do
      get "/landlords/create"
      expect(response).to have_http_status(:success)
    end
  end

end
