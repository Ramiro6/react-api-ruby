class Api::PostsController < ApplicationController
  def index
    @items = Post.all
    render json: @items, status: :ok
  end

  def create
  end

  def delete
  end
end
