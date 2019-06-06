Rails.application.routes.draw do
  namespace :v1 do 
    resources :users
  end 
  post '/login', to: "autho#login"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
