class Front::UsersController < FrontMemberController
  def posts
    @user = User.find(params[:id])
    @posts = @user.posts.order(created_at: :desc)
  end
end
