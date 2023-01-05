class Customers < ActiveRecord::Migration[6.1]
  def change

    create_table :customers do |t|

      t.string :name
      # t.integer :purchase_id
  
    


    end
  end
end
