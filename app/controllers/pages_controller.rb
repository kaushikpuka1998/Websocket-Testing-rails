class PagesController < ApplicationController
  def home
  end

  def hello
    ActionCable.server.broadcast 'AlertsChannel',"new message"
  end
end
