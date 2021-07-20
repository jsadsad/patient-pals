import React from 'react'
import MessageForm from '../message/message_form_container'

class ConversationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      senderId: this.props.currentUser,
      recipientId: this.props.recipientId,
    }
  }

  render() {
    return (
      <div>
        <MessageForm />
      </div>
    )
  }
}

export default ConversationForm
