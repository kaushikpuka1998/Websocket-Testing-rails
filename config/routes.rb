Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post '/hello', to: 'pages#hello'
  get '/pages/home', to: 'pages#home'
end
