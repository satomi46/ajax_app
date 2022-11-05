class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content]) #createしたparamsをpostに入れて
    render json:{ post: post } #postという変数でjsonに渡してる
  end
end
