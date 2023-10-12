class PagesController < ApplicationController
  helper PagesHelper

  def home
  end

  def hello
    ActionCable.server.broadcast 'AlertsChannel',"new message"
  end
end