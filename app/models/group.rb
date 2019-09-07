class Group < ApplicationRecord
  has_many :massages
  has_many :users, through: :users_groups
end
