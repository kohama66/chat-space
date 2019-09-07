class Group < ApplicationRecord
  has_many :messages
  has_many :users, through: :users_groups
end
