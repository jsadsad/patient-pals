import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

class UserIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sender_id: this.props.currentUser.id,
      recipient_id: this.props.user.id,
      sender_name: `${this.props.currentUser.firstName} ${this.props.currentUser.lastName}`,
      recipient_name: `${this.props.user.firstName} ${this.props.user.lastName}`,
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
      <div className="user-index-item">
        <h2>{user.role}</h2>
        <h3>
          {user.firstName} {user.lastName}
        </h3>
        <p>Location: {user.location}</p>
        {currentUser.role !== user.role ? (
          <button onClick={this.handleSubmit}>
            <Link to={`/conversations/${user.id}/messages/new`}>
              {' '}
              <FontAwesomeIcon
                icon={faComments}
                color="blue"
                size="lg"
                fixedWidth
              />
            </Link>
          </button>
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default UserIndexItem
