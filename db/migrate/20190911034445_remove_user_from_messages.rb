class RemoveUserFromMessages < ActiveRecord::Migration[5.0]
  def change
    remove_column :messages, :user, :integer
    remove_column :messages, :group, :integer
  end
end
