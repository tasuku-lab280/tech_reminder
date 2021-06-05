USERS = 20

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
