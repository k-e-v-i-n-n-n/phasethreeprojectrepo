class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
# Get routes


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

  get "/seasons" do

    seasons = Season.all
    seasons.to_json(include: :items)

  end

  get "/seasons/:id" do
    season = Season.find(params[:id])
    season.to_json(include: :items)

  end


  #Post routes


  
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
    season_id: params[:season_id],
    designer_id: params[:designer_id]

    )
    item.to_json
  end



  # Patch routes

 
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
      designer_id: params[:designer_id],
      season_id: params[:season_id]
      
    )
    item.to_json
  end



  # Delete routes


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




end
