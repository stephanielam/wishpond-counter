class CreateTimes < ActiveRecord::Migration
  def change
    create_table :times do |t|
      t.integer :number

      t.timestamps
    end
  end
end
