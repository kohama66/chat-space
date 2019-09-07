class User < ApplicationRecord
  has_many :massages
  has_many :group, through: :users_groups
end
