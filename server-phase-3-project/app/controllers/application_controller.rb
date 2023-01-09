class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
# Get routes
  get "/customers" do
    customers = Customer.all
    customers.to_json
  end

  get "/designers" do
    designers = Designer.all
    designers.to_json(include: :items)
  end


  get "/items" do
    items = Item.all
    items.to_json
  end

  get "/items/:id" do
    items = Item.where(designer_id: params[:id])
    items.to_json
  end

  get "/purchases" do
    purchases = Purchase.all
    purchases.to_json
  end

  #Post routes

  post "/customers" do
    customer = Customer.create(
    name: params[:name]
    )
    customer.to_json
  end
  
  post "/designers" do
    designer = Designer.find_or_create_by(name: params[:name])
    designer.to_json
  end

  post "/items" do
    item = Item.create(
    name: params[:name],
    size: params[:size],
    color: params[:color],
    price: params[:price],
    stock_quantity: params[:stock_quantity],
    designer_id: params[:designer_id]

    )
    item.to_json
  end

  post "/purchases" do
    purchases = Purchase.all
    purchases.to_json
  end

  # Patch routes

  patch "/customers/:id" do
    customer = Customer.find(params[:id])
    customer.update(
    name: params[:name]
    )
  
    customer.to_json
  end

  patch "/designers/:id" do
    designer = Designer.find(params[:id])
    designer.update(
    name: params[:name]
    )
  
    designer.to_json
  end

  patch "/items/:id" do
    item = Item.find(params[:id])
    item.update(
      name: params[:name],
      size: params[:size],
      color: params[:color],
      price: params[:price],
      stock_quantity: params[:stock_quantity],
      designer_id: params[:designer_id]
    )
    item.to_json
  end

  patch "/purchases/:id" do
    purchase = Purchase.find(params[:id])
    purchase.update(
    item_id: params[:item_id],
    customer_id: params[:customer_id]
    )
  
    purchase.to_json
  end

  # Delete routes

  delete "/customers/:id" do
    customer = Customer.find(params[:id])
    customer.destroy
 
    customer.to_json
  end

  delete "/designers/:id" do
    designer = Designer.find(params[:id])
    designer.destroy
    designer.to_json
  end

  delete "/items/:id" do
    item = Item.find(params[:id])
    item.destroy
    item.to_json
  end

  delete "/purchases/:id" do
    purchase = Purchase.find(params[:id])
    purchase.destroy
  
    purchase.to_json
  end


end
