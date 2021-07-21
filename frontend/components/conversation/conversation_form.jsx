import React from 'react'
import MessageForm from '../message/message_form_container'

class ConversationForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUserId, conversationId } = this.props
    if (!currentUserId) return <h1>Loading...</h1>
    return (
      <div>
        <MessageForm
          currentUserId={currentUserId}
          conversationId={conversationId}
        />
      </div>
    )
  }
}

export default ConversationForm
