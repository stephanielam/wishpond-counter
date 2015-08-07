Rails.application.routes.draw do
  root 'counter#index'

  resources :counter, only: [:index, :create] do

  end

end