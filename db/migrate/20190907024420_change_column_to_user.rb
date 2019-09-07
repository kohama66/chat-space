class ChangeColumnToUser < ActiveRecord::Migration[5.0]
  def up
    change_column :users, :name, :string, null: false
    change_column :users, :password, :string, null: false
    change_column :users, :email, :string, null: false, unique: true 
  end

  def down
    change_column :users, :name, :string, null: true
    change_column :users, :password, :string, null: true
    change_column :users, :email, :string, null: true
  end  
end
