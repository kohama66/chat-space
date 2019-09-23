json.body @message.body
json.name current_user.name
json.created_at @message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')
json.image @message.image.url
json.id @message.id