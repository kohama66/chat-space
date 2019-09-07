class User < ApplicationRecord
  has_many :massages
  has_many :groups, through: :users_groups
end
