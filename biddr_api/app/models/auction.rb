class Auction < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy

  validates(:title, presence: true, uniqueness: true)

  validates(:description, presence: { message: "must exist"},
                  length: { minimum: 10 })

  validates(:reserve_price, numericality: { greater_than_or_equal_to: 0 })
end
