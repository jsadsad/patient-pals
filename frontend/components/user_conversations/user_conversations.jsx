import React from 'react'
import { Link } from 'react-router-dom'

class UserConversations extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchConversations()
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
        {' '}
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="row">Active Conversations</th>
            </tr>
          </thead>
          {userConversations.map((conversation, idx) => (
            <tbody key={idx}>
              <tr>
                <td>
                  {idx + 1}. {conversation.recipientName}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    )
  }
}

export default UserConversations
