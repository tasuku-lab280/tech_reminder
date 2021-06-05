USERS = 10
COUNT = 20
USER_IDS = [1, 2, 3]

# 会員
USERS.times do |n|
  nickname  = "会員#{n+1}"
  email = "dev+user#{n+1}@example.com"
  password = 'password'
  User.create!(
    nickname:  nickname,
    email: email,
    password: password,
    password_confirmation: password
  )
end

# 投稿
results = Array.new(COUNT) do |i|
  num = i + 1
  {
    user_id: USER_IDS[i % 3],
    status: Post.status.values[i % 3],
    title: "サンプルタイトル#{num}",
    body: "サンプル本文#{num}",
  }
end
Post.create!(results)
