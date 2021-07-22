import { connect } from 'react-redux'

import { fetchConversations } from '../../actions/conversation_actions'

import UserConversations from './user_conversations'

const mapStateToProps = ({ entities }) => {
  return {
    userConversations: entities.conversations,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchConversations: () => dispatch(fetchConversations()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConversations)
