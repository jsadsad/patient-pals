import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <h3>Hello, {currentUser.firstName}!</h3>
      <button className="btn btn-secondary" onClick={logout}>
        Log out
      </button>
    </div>
  ) : (
    <div className="landing-container">
      <button type="button" className="btn btn-info">
        <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
          Login
        </Link>
      </button>
      <br />
      <br />
      <button type="button" className="btn btn-info">
        <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
          Sign up
        </Link>
      </button>
    </div>
  )
  return (
    <div className="landing-login-signup">
      <h4>Welcome to Patient Pals!</h4>
      {display}
    </div>
  )
}

export default LandingPage
