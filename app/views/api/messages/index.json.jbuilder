json.array! @messages do |message|
  json.body     message.body
  json.image       message.image.url
  json.created_at  message.created_at.to_s(:default)
  json.name   message.user.name
  json.id          message.id
end