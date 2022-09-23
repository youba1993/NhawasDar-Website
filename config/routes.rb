Rails.application.routes.draw do
  resources :houses,only: [:create, :index]
  resources :landlords, only: [:create]
  resources :users, only: [:create]
  
  get '/user_profile', to: 'users#profile'
  get '/landlord_profile', to: 'landlords#profile'
  post '/user_login', to: 'auth#user_create'
  post '/landlord_login', to: 'auth#landlord_create'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
