class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.string :date
      t.binary :image

      t.timestamps
    end
  end
end
