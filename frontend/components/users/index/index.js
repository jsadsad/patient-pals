import React from 'react'
import UserIndexItem from '../index_item/index_item'

class UserIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users, currentUser } = this.props
    if (users === undefined) return null

    const allUsers = users.map((user, idx) => {
      return (
        <div key={idx}>
          {currentUser.role !== user.role ? 'I can DM' : "Can't DM"}
          <UserIndexItem user={user} />
        </div>
      )
    })

    return (
      <div>
        <div>{allUsers}</div>
      </div>
    )
  }
}

export default UserIndex
