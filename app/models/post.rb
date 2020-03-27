class Post < ApplicationRecord
  validates :content, presence: true, length: { maximum: 25 }  
end
