class ApplicationController < ActionController::Base
  # モジュール
  include DeviseTokenAuth::Concerns::SetUserByToken
  helper_method :current_user, :user_signed_in?


  # フック
  skip_before_action :verify_authenticity_token
end
