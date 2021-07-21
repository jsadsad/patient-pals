import React from 'react'

const MessageBox = ({ messages }) => {
  return messages.map((message, idx) => <div key={idx}>{message.body}</div>)
}

export default MessageBox
