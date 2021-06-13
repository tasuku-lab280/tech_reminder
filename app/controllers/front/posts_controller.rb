class Front::PostsController < FrontMemberController
  # メソッド
  def new
    @post = Post.new
    render layout: 'text_modal'
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      flash[:success] = '新規投稿しました。'
      redirect_to action: :show, id: @post.id
    else
      render :new, layout: 'text_modal'
    end
  end

  def show
    @post = Post.find(params[:id])
  end


  # メソッド(Private)
  private

  def post_params
    params.require(:post).permit(:title, :body)
  end
end
