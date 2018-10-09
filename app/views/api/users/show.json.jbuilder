json.partial! 'user', user: @user
json.sessions do
  json.extract! @user, :id
end
