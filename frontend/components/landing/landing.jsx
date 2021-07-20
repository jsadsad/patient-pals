import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>We are signed in</p>
      <p>Hello {currentUser.firstName}</p>
      <button onClick={logout}>Log out</button>
    </div>
  ) : (
    <div>
      <p>We are not signed in</p>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Sign up</Link>
    </div>
  )
  return <div>{display}</div>
}

export default LandingPage
