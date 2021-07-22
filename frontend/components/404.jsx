import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const NotFound = () => {
  return (
    <div className="err-wrap">
      <div className="notfound-err">
        4
        <FontAwesomeIcon
          className="spinner"
          icon={faSpinner}
          color="blue"
          size="1x"
        />
        4
      </div>

      <div className="msg">
        This page doesn't exist! Maybe it's still hiding out in quarantine?
        <p>
          Let's head back to the <a href="#">home</a> page!
        </p>
      </div>
    </div>
  )
}

export default NotFound
