import React from 'react'
import { fetchUser } from '../../utils/user_api_util'

class UserConversations extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchConversations()
  }

  render() {
    const { userConversations } = this.props
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
            <li>{fetchUser(conversation.recipientId).firstName}</li>
          </ul>
        ))}
      </div>
    )
  }
}

export default UserConversations
