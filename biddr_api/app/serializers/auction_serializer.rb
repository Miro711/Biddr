class AuctionSerializer < ActiveModel::Serializer
  attributes(
    :id,
    :title,
    :description,
    :ends_at,
    :reserve_price,
    :created_at,
    :updated_at
  )

  belongs_to(:user, key: :seller)
  has_many(:bids)

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at, :updated_at, :auction_id
    belongs_to(:user)
  end
end
