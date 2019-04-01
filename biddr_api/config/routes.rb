Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do # /api...
    namespace :v1 do # /api/v1...
      resources :auctions, only: [:show, :index, :create] do
        resources :bids, only: [:create]
      end
      resource :session, only: [:create, :destroy] # /api/v1/session
      resources :users, only: [] do
        get :current, on: :collection # /api/v1/users/current
      end
    end
  end
end
