class Items < ActiveRecord::Migration[6.1]
  def change

    create_table :items do |t|

      t.string :name
      t.string :size
      t.string :color
      t.string :price
      t.integer :stock_quantity
      t.integer :designer_id



    end
  end
end
