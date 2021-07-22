class Api::MessagesController < ApplicationController
  before_action { @conversation = Conversation.find(params[:conversation_id]) }

  def index
    @messages = @conversation.messages
    @message = @conversation.messages.new
  end

  def create
    @message = Message.create(message_params)
    @message.conversation_id = params[:conversation_id]
    render :show if @message.save!
  end

  private

  def message_params
    params.require(:message).permit(:body, :user_id)
  end
end
