class Bid < ApplicationRecord
  belongs_to :auction
  belongs_to :user
  validates(:price, presence: true, numericality: { greater_than_or_equal_to: 0 })
end
