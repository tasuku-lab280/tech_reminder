class CreateUserTables < ActiveRecord::Migration[6.0]
  def up
    # 会員
    create_table :users do |t|
      t.string      :nickname,          null: false
      t.string      :email,             null: false
      t.string      :image

      ## Required
      t.string     :provider,           null: false, default: 'email'
      t.string     :uid,                null: false, default: ''

      ## Database authenticatable
      t.string     :encrypted_password, null: false, default: ''

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      t.boolean  :allow_password_change, default: false

      ## Rememberable
      t.datetime   :remember_created_at

      # Confirmable
      t.string      :confirmation_token
      t.datetime    :confirmed_at
      t.datetime    :confirmation_sent_at
      t.string      :unconfirmed_email

      ## Tokens      
      t.text       :tokens

      t.text       :note
      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, [:uid, :provider],     unique: true
    add_index :users, :reset_password_token, unique: true
    add_index :users, :confirmation_token,   unique: true
  end

  def down
    drop_table :users
  end
end
