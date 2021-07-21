import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const NavBar = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Hello, {currentUser.firstName} {currentUser.lastName}!
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdown"
        >
          <li>
            <Link className="dropdown-item" to="/messsages">
              Messsages
            </Link>
          </li>
          <li>
            <div className="dropdown-item" onClick={logout}>
              Log Out
            </div>
          </li>
        </ul>
      </li>
    </ul>
  ) : (
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">
          Log In
        </a>
      </li>
    </ul>
  )
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Patient Pals
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Patients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Patient Partners
              </a>
            </li>
          </ul>
          {display}
        </div>
      </div>
    </nav>
  )
}

export default withRouter(NavBar)
