Rails.application.routes.draw do
  scope module: :front do
    root 'home#index' # トップ
  end
end
