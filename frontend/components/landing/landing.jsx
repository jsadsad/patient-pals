import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => (
  <div>
    This is the landing page
    <Link to="/login">Login</Link>
    <br />
    <Link to="/signup">Sign up</Link>
  </div>
)

export default LandingPage
