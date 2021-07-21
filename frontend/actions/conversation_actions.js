import * as ConversationUtil from '../utils/conversation_api_util'

export const RECEIVE_CONVERSATION = 'RECEIVE_CONVERSATION'
export const RECEIVE_CONVERSATIONS = 'RECEIVE_CONVERSATIONS'
export const REMOVE_CONVERSATION = 'REMOVE_CONVERSATION'
export const CLEAR_CONVERSATION = `CLEAR_CONVERSATION`

const receiveConversation = (payload) => {
  return {
    type: RECEIVE_CONVERSATION,
    payload,
  }
}

const receiveConversations = (conversations) => {
  return {
    type: RECEIVE_CONVERSATIONS,
    conversations,
  }
}

const removeConversation = (conversation) => {
  return {
    type: REMOVE_CONVERSATION,
    conversationId: conversation.id,
  }
}

export const clearConversation = () => {
  return {
    type: CLEAR_CONVERSATION,
  }
}

export const createConversation = (conversation) => (dispatch) => {
  return ConversationUtil.createConversation(conversation).then(
    (createdConversation) => dispatch(receiveConversation(createdConversation)),
    (error) => console.log(error)
  )
}

export const deleteConversation = (conversationId) => (dispatch) => {
  return ConversationUtil.deleteConversation(conversationId).then(() => {
    dispatch(removeConversation(conversationId))
  })
}

export const fetchConversation = (conversationId) => (dispatch) => {
  return ConversationUtil.fetchConversation(conversationId).then(
    (conversation) => dispatch(receiveConversation(conversation)),
    (error) => console.log(error)
  )
}

export const fetchConversations = () => (dispatch) => {
  return ConversationUtil.fetchConversations().then(
    (conversations) => dispatch(receiveConversations(conversations)),
    (error) => console.log(error)
  )
}
