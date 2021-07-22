class FrontMemberController < FrontController
  # フック
  before_action :authenticate_user!
end
