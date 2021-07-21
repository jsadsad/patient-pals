import React from 'react'
import UserIndexItem from '../index_item/index_item_container'

class UserIndex extends React.Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  render() {
    const { users, currentUser } = this.props
    if (!users) return <h1>Loading...</h1>

    const allUsers = users.map((user, idx) => {
      return (
        <div key={idx}>
          <UserIndexItem user={user} currentUser={currentUser} />
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
