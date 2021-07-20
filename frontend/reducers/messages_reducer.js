import {
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGES,
  REMOVE_MESSAGE,
} from '../actions/message_actions'

import { RECEIVE_CONVERSATION } from '../actions/conversation_actions'

const messagesReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_MESSAGE:
      return Object.assign({}, oldState, {
        [action.message.id]: action.message,
      })
    case RECEIVE_MESSAGES:
      return action.messages
    case REMOVE_MESSAGE:
      const newState = Object.assign({}, oldState)
      delete newState[action.messageId]
      return newState
    case RECEIVE_CONVERSATION:
      return Object.assign({}, oldState, action.messages)
    default:
      return oldState
  }
}

export default messagesReducer
