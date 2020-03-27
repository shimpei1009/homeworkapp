class Post < ApplicationRecord
  validates :content, presence: true, length: { maximum: 25 }  
  belongs_to :user
end
