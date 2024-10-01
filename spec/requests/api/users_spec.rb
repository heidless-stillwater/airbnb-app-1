
require "rails_helper"

RSpec.describe "Api::Users", type: :request do 
  describe "GET show" do
    let(:headers) {
      {accept: 'application/json'}
    }
    
    context "user exists" do 
      it "is successful" do 
        user = create(:user)
        get api_user_path(user), headers: headers
        expect(response).to be_successful
      end
    end

    context "user does not exist" do 
      it "is not found" do 
        get api_user_path(id: "junk"), headers: headers
        expect(response).to have_http_status :not_found
      end
    end

  end
end

