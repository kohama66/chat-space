class MessagesController < ApplicationController
before_action :set_group
  
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    @member = @group.users
  end

  def new
  end  
  
  def create
    @message = @group.messages.create(message_params)
    respond_to do |format|
      format.html { redirect_to group_messages_path(params[:group_id]) }
      format.json
    end
  end  

  def edit
  end  

  private
  def message_params
    params.require(:message).permit(:body, :image).merge(group_id: params[:group_id], user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end  
end
