import React from 'react'

class UserConversations extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchConversations()
  }

  render() {
    console.log(this.props.userConversations)
    return <div>Hellloooo</div>
  }
}

export default UserConversations
