import React from 'react'
import MessageForm from '../message/message_form_container'

class ConversationForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentUserId, conversationId } = this.props
    return (
      <div>
        <MessageForm currentUserId={currentUserId} />
      </div>
    )
  }
}

export default ConversationForm
