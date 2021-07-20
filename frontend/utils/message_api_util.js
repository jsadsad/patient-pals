export const createMessage = (message) => {
  return $.ajax({
    method: `POST`,
    url: `/api/conversations/${message.conversation_id}/messages`,
    data: { message },
  })
}

export const updateMessage = (message) => {
  return $.ajax({
    method: `PATCH`,
    url: `/api/conversations/${message.conversation_id}/messages/${message.id}`,
    data: { message },
  })
}

export const deleteMessage = (message) => {
  return $.ajax({
    method: `DELETE`,
    url: `/api/conversations/${message.conversation_id}/messages/${message.id}`,
  })
}

export const fetchMessage = (messageId, conversationId) => {
  return $.ajax({
    method: `GET`,
    url: `/api/conversations/${conversationId}/messages/${messageId}`,
  })
}

export const fetchMessages = (conversationId) => {
  return $.ajax({
    method: `GET`,
    url: `/api/conversations/${conversationId}/messages`,
  })
}
