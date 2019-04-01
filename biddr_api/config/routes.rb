Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do # /api...
    namespace :v1 do # /api/v1...
      resource :session, only: [:create, :destroy] # /api/v1/session
    end
  end
end
