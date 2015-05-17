class AddRecyclables < ActiveRecord::Migration
  def change
    create_table :recyclables do |t|
      t.references :user, index:true
      t.string :recycle_type
      t.integer :amount
      t.date :recycle_date
      t.timestamps
    end
  end
end

