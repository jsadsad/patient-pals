import React from 'react'

const UserIndexItem = ({ user }) => (
  <div>
    <p>
      {user.firstName} {user.lastName}
    </p>
    <p>{user.location}</p>
    <p>{user.role}</p>
    <hr />
  </div>
)

export default UserIndexItem
