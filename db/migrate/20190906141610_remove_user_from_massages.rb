class RemoveUserFromMassages < ActiveRecord::Migration[5.0]
  def change
    remove_column :massages, :user, :integer
    remove_column :massages, :group, :integer
  end
end
