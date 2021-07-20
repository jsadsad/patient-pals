class Api::MessagesController < ApplicationController
  before_action do
    @conversation = Conversation.find(params[:conversation_id])
  end

  def index
    @messages = @conversation.messages
    @message = @conversation.messages.new
  end

  def new
    @message = @conversation.messasges.new
  end

  def create
    @message = @conversation.messages.new(message_params)
    if @message.save
      render :show
    end
  end

  private
  def message_params
    params.require(:message).permit(:body, :user_id)
  end
end
