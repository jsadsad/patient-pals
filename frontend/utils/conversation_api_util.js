export const createConversation = (conversation) => {
  return $.ajax({
    method: `POST`,
    url: ` /api/conversations`,
    data: { conversation },
  })
}

export const deleteConversation = (conversation) => {
  return $.ajax({
    method: `DELETE`,
    url: `/api/conversations/${conversation.id}`,
  })
}

export const fetchConversation = (conversationId) => {
  return $.ajax({
    method: `GET`,
    url: `/api/conversations/${conversationId}`,
  })
}

export const fetchConversations = () => {
  return $.ajax({
    method: `GET`,
    url: `/api/conversations`,
  })
}
