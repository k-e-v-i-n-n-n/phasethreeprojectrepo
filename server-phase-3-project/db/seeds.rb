puts "🌱 Seeding spices..."

# Seed your database here


Designer.create(name: "Céline")
Designer.create(name: "Chanel")
Designer.create(name: "Dior")
Designer.create(name: "Jacquemus")
Designer.create(name: "Marant")
Designer.create(name: "Noir")

Item.create(name: "Bag", color: "Black", size: "Medium", stock_quantity: 100, designer_id: 1, price: "$5,500", season_id: "3")
Item.create(name: "Vest", color: "Brown", size: "Small", stock_quantity: 25, designer_id: 1, price: "$3,600", season_id: "1")
Item.create(name: "Sunglasses", color: "Black", size: "One-Size", stock_quantity: 300, designer_id: 1, price: "$380", season_id: "2")
Item.create(name: "Shoes", color: "White", size: "Small", stock_quantity: 50, designer_id: 2, price: "$990", season_id: "1")

Item.create(name: "Dress", color: "Red", size: "X Small", stock_quantity: 25, designer_id: 3, price: "$3,900", season_id: "2")

Item.create(name: "Foulard", color: "Black", size: "All", stock_quantity: 440, designer_id: 4, price: "$375", season_id: "3")

Item.create(name: "Pull", color: "Green", size: "Medium", stock_quantity: 300, designer_id: 5, price: "$315", season_id: "3")

Item.create(name: "Manteau", color: "Grey", size: "Small", stock_quantity: 250, designer_id: 6, price: "$915", season_id: "4")

Season.create(season: "Spring")
Season.create(season: "Summer")
Season.create(season: "Fall")
Season.create(season: "Winter")




puts "✅ Done seeding!"

