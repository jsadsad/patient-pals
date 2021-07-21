import React from 'react'

class MessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      body: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.clearConversation()
  }

  componentDidMount() {
    this.setState({
      body: '',
      user_id: this.props.currentUserId,
      conversation_id: this.props.conversationId,
    })
    this.props.fetchMessages(this.props.conversationId)
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.processMessage(this.state)
    this.setState({
      body: '',
    })
  }

  handleField(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
        user_id: this.props.currentUserId,
        conversation_id: this.props.conversationId,
      })
  }

  render() {
    const { conversationId, messages } = this.props
    console.log('this is messsages', messages)

    if (!conversationId) return <h1>Loading...</h1>
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
