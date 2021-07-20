import React from 'react'
import { Link } from 'react-router-dom'
import MessageForm from '../message/message_form'

class ConversationForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      senderId: this.props.currentUser.id,
      recipientId: this.props.recipientId,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.renderErrors = this.renderErrors.bind(this)
  }

  handleField(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processForm(this.state)
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
