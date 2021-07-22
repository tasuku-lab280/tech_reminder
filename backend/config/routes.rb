Rails.application.routes.draw do
  device_controllers = {
    registrations:  'front/devise_custom/registrations',
    sessions:       'front/devise_custom/sessions',
    passwords:      'front/devise_custom/passwords',
    confirmations:  'front/devise_custom/confirmations',
  }

  scope module: :front do
    root 'home#index' # トップ

    # Devise
    devise_for :users, controllers: device_controllers, path: 'user', path_names: {
      sign_in:  'login',
      sign_out: 'logout',
    }

    # 会員
    resources :users, only: [:show, :edit] do
      member do
        get 'posts'
      end
    end

    # 投稿
    resources :posts, only: [:new, :create, :show]
  end
end
