import React from 'react'
import { Link } from 'react-router-dom'

const UserIndexItem = ({ user, currentUser }) => (
  <div>
    {currentUser.role !== user.role ? (
      <Link to={`/conversations/${user.id}/messages/new`}>Can Dm</Link>
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

export default UserIndexItem
