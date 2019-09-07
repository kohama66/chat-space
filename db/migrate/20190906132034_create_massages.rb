class CreateMassages < ActiveRecord::Migration[5.0]
  def change
    create_table :massages do |t|
      t.text :body
      t.string :image
      t.integer :user
      t.integer :group
      t.timestamps null: false
    end
  end
end