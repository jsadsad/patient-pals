import React from 'react'
import MessageForm from '../message/message_form_container'

class ConversationForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conversationId: this.props.currentUserId,
    }
  }

  render() {
    const { currentUserId, conversationId, messages } = this.props

    if (!currentUserId || !conversationId) return <h1>Loading...</h1>

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
