class Front::Api::V1::Auth::RegistrationsController < DeviseTokenAuth::RegistrationsController
  # メソッド(Private)
  private

  def sign_up_params
    params.permit(:nickname, :email, :password, :password_confirmation)
  end
end
