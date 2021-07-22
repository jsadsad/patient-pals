import React from 'react'

const timeString = (time) => {
  return new Date(time).toLocaleTimeString('en-US')
}

const dateString = (time) => {
  return new Date(time).toLocaleDateString('en-US')
}

const userMessages = (message, currentUserId) => {
  return message.userId === currentUserId ? (
    <div>
      <small>You:</small>
      <div className="rounded">
        <li
          className="list-group-item text-left"
          style={{ backgroundColor: '#557ed8' }}
        >
          {message.body}
          <p className="text-sm-left">
            <small>
              {timeString(message.createdAt)} {dateString(message.createdAt)}
            </small>
          </p>
        </li>
      </div>
    </div>
  ) : (
    <div>
      <li className="list-group-item text-left">
        {message.body}
        <p className="text-sm-left text-muted">
          <small>
            {timeString(message.createdAt)} {dateString(message.createdAt)}
          </small>
        </p>
      </li>
    </div>
  )
}

const MessageBox = ({ messages, currentUserId }) => {
  if (!messages) return null
  return messages
    .filter((message) => message.id !== null)
    .map((message, idx) => (
      <div key={idx}>
        <ul className="list-group">{userMessages(message, currentUserId)}</ul>
      </div>
    ))
}

export default MessageBox
