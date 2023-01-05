class Purchases < ActiveRecord::Migration[6.1]
  def change

    create_table :purchases do |t|


      t.integer :item_id
      t.integer :customer_id

      
      


    end

    end
end
