class Front::UsersController < FrontMemberController
  def posts
    @user = User.find(params[:id])
    @posts = @user.posts
  end
end
