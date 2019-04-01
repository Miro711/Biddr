# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Bid.destroy_all
Auction.destroy_all
User.destroy_all

PASSWORD = "murmur"
MAX_PRICE = 1000

super_user = User.create(
    first_name: "Amir",
    last_name: "Helmy",
    email: "amir.helmy@mail.mcgill.ca",
    password: PASSWORD,
)

10.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name.downcase}-#{last_name.downcase}@example.com",
        password: PASSWORD
    )
end
users = User.all


10.times do 
    created_at = Faker::Date.backward(365 * 5)

    a = Auction.create(
        title: Faker::Hacker.say_something_smart,
        description: Faker::ChuckNorris.fact,
        created_at: created_at,
        updated_at: created_at,
        ends_at: Faker::Date.forward(365),
        reserve_price: rand(MAX_PRICE),
        user: users.sample
    )

    if a.valid?
        current_price = a.reserve_price
        5.times do
          a.bids << Bid.new(
            price: rand(current_price..MAX_PRICE),
            user: users.sample
          )
        end
    end
end

auctions = Auction.all
bids = Bid.all

puts Cowsay.say("Generated #{auctions.count} auctions", :koala)
puts Cowsay.say("Generated #{bids.count} bids", :sheep)
puts Cowsay.say("Generated #{users.count} users", :dragon)
