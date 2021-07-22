
class Front::DeviseCustom::RegistrationsController < Devise::RegistrationsController
  # レイアウト
  layout 'front_modal'


  # フック
  before_action :configure_permitted_parameters, if: :devise_controller?


  # メソッド(Private)
  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up) do |u|
      u.permit(
        :nickname,
        :email,
        :password,
      )
    end
  end
end
