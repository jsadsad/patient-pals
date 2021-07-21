import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = ({ currentUser, logout }) => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: '#e3f2fd' }}
    >
      <a className="navbar-brand" href="#">
        Patient Pals
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <span className="nav-link">
              {currentUser.firstName} {currentUser.lastName}
            </span>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Messsages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              All Users
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
      </div>
    </nav>
  )
}

export default NavBar
