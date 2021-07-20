import { combineReducers } from 'redux'

import usersReducer from './users_reducer'
import messagesReducer from './messages_reducer'
import conversationsReducer from './coversations_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  conversations: conversationsReducer,
})

export default entitiesReducer
