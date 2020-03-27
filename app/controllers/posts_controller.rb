class PostsController < ApplicationController
  def index
    @posts = Post.includes(:user)
  end

  def new
  end
  
  def create
    # binding.pry
    @post = Post.create(post_params)
    respond_to do |format|
      format.html { redirect_to root_path  }
      format.json 
    end
  end

  private
  def post_params
    params.permit(:content).merge(user_id: current_user.id)
  end

end
