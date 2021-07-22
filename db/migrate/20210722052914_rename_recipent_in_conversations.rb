class RenameRecipentInConversations < ActiveRecord::Migration[5.2]
  def change
    rename_column :conversations, :recipent_name, :recipient_name
  end
end
