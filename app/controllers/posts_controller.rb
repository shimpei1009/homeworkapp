class PostsController < ApplicationController
  def index
    @posts = Post.all.order(created_at: :DESC)
  end

  def new
  end
  
  def create
    # binding.pry
    Post.create(post_params)
    redirect_to posts_path
  end

  private
  def post_params
    params.permit(:content)
  end

end
