Rails
  .application
  .routes
  .draw do
    root to: 'static_pages#root'
    namespace :api, defaults: { format: :json } do
      resources :users, only: %i[index show update create]
    end
    resource :session, only: %i[create destroy]
  end
