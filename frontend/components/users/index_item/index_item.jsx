import React from 'react'
import { Link } from 'react-router-dom'

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sender_id: this.props.currentUser.id,
      recipient_id: this.props.user.id,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const conversation = Object.assign({}, this.state)
    this.props.createConversation(conversation)
  }

  render() {
    const { user, currentUser } = this.props
    if (!user) return <h1>Loading...</h1>
    return (
      <div>
        {currentUser.role !== user.role ? (
          <button onClick={this.handleSubmit}>
            <Link to={`/conversations/${user.id}/messages/new`}>Can Dm</Link>
          </button>
        ) : (
          "Can't DM"
        )}
        <p>
          {user.firstName} {user.lastName}
        </p>
        <p>{user.location}</p>
        <p>{user.role}</p>
        <hr />
      </div>
    )
  }
}

export default UserIndexItem
