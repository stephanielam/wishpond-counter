class CreateTimerecords < ActiveRecord::Migration
  def change
    create_table :timerecords do |t|
      t.integer :number
      t.timestamps
    end
  end
end
