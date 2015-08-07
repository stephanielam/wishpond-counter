Rails.application.routes.draw do
  get 'counter/index'

  resources :counter, only: [:index]
end
