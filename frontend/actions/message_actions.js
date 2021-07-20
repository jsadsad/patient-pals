import * as MessageUtil from '../utils/message_api_util'

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES'
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'

const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message,
  }
}

const receiveMessages = (messages) => {
  return {
    type: RECEIVE_MESSAGES,
    messages,
  }
}

const removeMessage = (message) => {
  return {
    type: REMOVE_MESSAGE,
    messageId: message.id,
  }
}

export const createMessage = (message) => (dispatch) => {
  return MessageUtil.createMessage(message).then(
    (createdMessage) => dispatch(receiveMessage(createdMessage)),
    (error) => console.log(error)
  )
}

export const updateMessage = (message) => (dispatch) => {
  return MessageUtil.updateMessage(message).then(
    (updatedMessage) => dispatch(receiveMessage(updatedMessage)),
    (error) => console.log(error)
  )
}

export const deleteMessage = (messageId) => (dispatch) => {
  return MessageUtil.deleteMessage(messageId).then(() =>
    dispatch(removeMessage(messageId))
  )
}

export const fetchMessage = (conversationId, messageId) => (dispatch) => {
  return MessageUtil.fetchMessage(conversationId, messageId).then(
    (message) => dispatch(receiveMessage(message)),
    (error) => console.log(error)
  )
}

export const fetchMessages = (conversationId) => (dispatch) => {
  return MessageUtil.fetchMessages(conversationId).then(
    (messages) => dispatch(receiveMessages(messages)),
    (error) => console.log(error)
  )
}
