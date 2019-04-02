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

  def bids
    object.bids.order("price desc")
  end

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :price, :created_at, :updated_at, :auction_id
    belongs_to(:user)
  end
end
