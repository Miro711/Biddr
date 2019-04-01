class Bid < ApplicationRecord
  belongs_to :auction
  belongs_to :user
  validates(:price, presence: {message: "price must exist"})
end
