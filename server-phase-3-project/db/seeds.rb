puts "🌱 Seeding spices..."

# Seed your database here


Designer.create(name: "Céline")
Designer.create(name: "Chanel")
Designer.create(name: "Dior")

Item.create(name: "Bag", color: "Black", size: "Medium", stock_quantity: 100, designer_id: 1, price: "$5,500")
Item.create(name: "Vest", color: "Brown", size: "Small", stock_quantity: 25, designer_id: 1, price: "$3,600")
Item.create(name: "Sunglasses", color: "Black", size: "One-Size", stock_quantity: 300, designer_id: 1, price: "$380")
Item.create(name: "Shoes", color: "White", size: "Small", stock_quantity: 50, designer_id: 2, price: "$990")
Item.create(name: "Dress", color: "Red", size: "X Small", stock_quantity: 25, designer_id: 3, price: "$3,900")

Customer.create(name: "Agnès")
Customer.create(name: "Hélène")
Customer.create(name: "Louise")

Purchase.create(customer_id: 1, item_id: 2)




puts "✅ Done seeding!"
