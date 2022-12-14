Rails.application.routes.draw do
  resources :houses
  resources :landlords, only: [:create]
  resources :users, only: [:create]
  resources :house_likes, only: [:create, :show, :destroy, :index]
  resources :house_reviews, only: [:create, :show, :update ,:destroy]
  resources :contracts, only: [:index, :create, :destroy, :update]

  get '/profile', to: 'application#profile'
  post '/user_login', to: 'auth#user_create'
  post '/landlord_login', to: 'auth#landlord_create'
  get '/landlord_index', to: 'houses#landlord_index'
  post '/houses/adress', to: 'houses#show'
  get '/landlord/contracts', to: 'contracts#landlord_index'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
