Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  scope 'api/v1' do
  	resources :todos
    # user routes
    resources :users, only: %i[create show index]

    # user authentication
    post '/login', to: 'auth#login'

    # Check access
    get '/check_access', to: 'auth#check_access'
  end
end
