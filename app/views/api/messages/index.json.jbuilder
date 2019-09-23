json.array! @messages do |message|
  json.body     message.body
  json.image       message.image.url
  json.created_at  message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')
  json.name   message.user.name
  json.id          message.id
end
