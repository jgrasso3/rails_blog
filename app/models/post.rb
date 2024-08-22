class Post < ApplicationRecord
  # where you handle DB connections
  validates :title, presence: true, length: { minimum: 5, maximum: 50 }
  validates :body, presence: true, length: { minimum: 10, maximum: 500 }
  belongs_to :user
end
