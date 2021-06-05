#
# = 会員
#
class User < ApplicationRecord
  # モジュール
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable


  # 定数


  # アクセサ


  # 関連


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
