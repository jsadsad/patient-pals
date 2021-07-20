import React from 'react'

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
      user_id: this.props.currentUserId,
      conversation_id: this.props.conversationId,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processMessage(this.state)
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
        <textarea
          rows="4"
          cols="50"
          value={this.state.body}
          onChange={this.handleField('body')}
        />
        <button onClick={this.handleSubmit} type="submit">
          Send Message
        </button>
      </div>
    )
  }
}

export default MessageForm
