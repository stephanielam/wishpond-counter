class CounterController < ApplicationController
  attr_accessor :count
  def index
    @times = Times.all
    @count = 10
  end
end
