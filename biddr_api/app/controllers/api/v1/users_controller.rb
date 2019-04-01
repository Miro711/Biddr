class Api::V1::UsersController < ApplicationController
    before_action :authenticate_user!

    # /users/current <- On the collection
    def current
        render json: current_user
    end
end
