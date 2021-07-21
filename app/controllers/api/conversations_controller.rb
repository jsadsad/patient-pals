class Api::ConversationsController < ApplicationController
  before_action :require_logged_in

  def index
    @users = User.all
    @conversations = Conversation.all
  end

  def create
    if Conversation.between(params[:conversation][:sender_id], params[:conversation][:recipient_id]).present?
      @conversation = Conversation.between(params[:conversation][:sender_id], params[:conversation][:recipient_id]).first
    else
      @conversation = Conversation.create!(conversation_params)
    end
    render :show
  end

  private
  def conversation_params
    params.require(:conversation).permit(:sender_id, :recipient_id)
  end
end
