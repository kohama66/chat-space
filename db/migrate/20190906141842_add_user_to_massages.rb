class AddUserToMassages < ActiveRecord::Migration[5.0]
  def change
    add_reference :massages, :user, foreign_key: true
    add_reference :massages, :group, foreign_key: true
  end
end
