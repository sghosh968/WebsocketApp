class CreateChats < ActiveRecord::Migration
  def change
    create_table :chats do |t|
      t.text :content

      t.timestamps null: false
    end
  end
end
