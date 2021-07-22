import React from 'react'

class UserConversations extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchConversations().then(() => {
      for (let i = 0; i < this.props.userConversations.length; i++) {
        let id = this.props.userConversations[i].recipientId
        fetchUser(id)
      }
    })
  }

  render() {
    const { userConversations, fetchUser } = this.props
    if (!userConversations) return null

    const displayConversations = (conversations) => {
      {
        conversations.map((conversation) => (
          <div>{conversation.recipientId}</div>
        ))
      }
    }
    return (
      <div>
        {userConversations.map((conversation, idx) => (
          <ul key={idx}>
            <li>{conversation.recipientId}</li>
          </ul>
        ))}
      </div>
    )
  }
}

export default UserConversations
