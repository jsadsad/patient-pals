class AddSenderAndRecipientNameToConversation < ActiveRecord::Migration[5.2]
  def change
    add_column :conversations, :sender_name, :string
    add_column :conversations, :recipent_name, :string
  end
end
