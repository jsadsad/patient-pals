import React from 'react'

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      senderId: this.props.currentUser,
      recipientId: this.props.recipientId,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processForm(this.state)
  }

  handleField(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      })
  }

  render() {
    return (
      <div>
        <textarea rows="4" cols="50" />
        <button onClick={this.handleSubmit} type="submit">
          Send Message
        </button>
      </div>
    )
  }
}

export default MessageForm
