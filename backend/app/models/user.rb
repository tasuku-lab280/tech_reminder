# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  nickname            :string(255)      not null
#  email               :string(255)      not null
#  encrypted_password  :string(255)      not null
#  image               :string(255)
#  note                :text(65535)
#  remember_created_at :datetime
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

#
# = 会員
#
class User < ApplicationRecord
  # モジュール
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User


  # 定数


  # アクセサ


  # 関連
  has_many :posts, dependent: :destroy


  # 委譲


  # スコープ


  # フック


  # バリデーション
  validates :nickname,              presence: true,
                                    length: { maximum: 32, allow_blank: true }
                                    # uniqueness: false,
                                    # format: false
  # validates :image,                 presence: false,
                                    # length: { maximum: 255 }
                                    # uniqueness: false
                                    # format: false
  validates :note,                  presence: false,
                                    length: { maximum: 1024, allow_blank: true }
                                    # uniqueness: false
                                    # format: false


  # クラス変数


  # クラスメソッド


  # クラスメソッド(Private)


  # メソッド


  # メソッド(Private)
end
