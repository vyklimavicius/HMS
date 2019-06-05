class User < ApplicationRecord
   has_secure_password
   has_many :members
   has_many :tasks
   has_many :events, through: :tasks
end
