Rails.application.routes.draw do
  scope module: :front do
    root 'home#index' # トップ
    devise_for :users # Devise
  end
end
