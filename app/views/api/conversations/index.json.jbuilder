@conversations.each do |conversation|
  json.set! conversation.id do
    json.partial! 'conversation', conversation: conversation
  end
end
