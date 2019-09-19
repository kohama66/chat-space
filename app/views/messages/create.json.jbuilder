json.body @message.body
json.name current_user.name
json.created_at @message.created_at.strftime("%Y/%m/%d %H:%M")
json.image @message.image.url
json.id @message.id