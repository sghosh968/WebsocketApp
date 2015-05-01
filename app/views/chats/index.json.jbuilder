json.array!(@chats) do |chat|
  json.extract! chat, :id, :content
  json.url chat_url(chat, format: :json)
end
