import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from './components/root'

import * as MessageUtil from './actions/message_actions'
import * as ConversationUtil from './actions/conversation_actions'

document.addEventListener('DOMContentLoaded', () => {
  let store
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
    }
    store = configureStore(preloadedState)
    delete window.currentUser
  } else {
    store = configureStore()
  }

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)

  //TESTING
  window.getState = store.getState
  window.dispatch = store.dispatch
  // window.createMessage = MessageUtil.createMessage
  // window.createConversation = ConversationUtil.createConversation
})
