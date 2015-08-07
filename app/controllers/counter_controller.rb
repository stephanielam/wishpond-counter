class CounterController < ApplicationController
  attr_accessor :count
  def index
    @times = Timerecord.all
    @count = 10
  end

  def create
    Timerecord.create(number:params[:count])
    redirect_to '/'
  end
end
