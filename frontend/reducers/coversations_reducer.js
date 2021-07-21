import {
  RECEIVE_CONVERSATION,
  RECEIVE_CONVERSATIONS,
  REMOVE_CONVERSATION,
  CLEAR_CONVERSATION,
} from '../actions/conversation_actions'

const conversationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  switch (action.type) {
    case RECEIVE_CONVERSATION:
      return Object.assign({}, oldState, {
        [action.payload.conversation.id]: action.payload,
      })
    case RECEIVE_CONVERSATIONS:
      return action.conversations
    case REMOVE_CONVERSATION:
      const newState = Object.assign({}, oldState)
      delete newState[action.conversationId]
      return newState
    case CLEAR_CONVERSATION:
      return {}
    default:
      return oldState
  }
}

export default conversationsReducer
