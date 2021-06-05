class CreateUserTables < ActiveRecord::Migration[6.0]
  def up
    # 会員
    create_table :users do |t|
      t.string      :nickname,           null: false
      t.string      :email,              null: false
      t.string      :encrypted_password, null: false
      t.string      :image
      t.text        :note
      t.timestamps null: false
    end

    add_index :users, :email, unique: true
  end

  def down
    drop_table :users
  end
end
