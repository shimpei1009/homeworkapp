json.content  @post.content
json.user  @post.user.nickname
json.created_at @post.created_at.strftime("%Y/%m/%d %H:%M")
