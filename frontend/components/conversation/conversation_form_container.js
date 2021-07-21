import { connect } from 'react-redux'
import { createConversation } from '../../actions/conversation_actions'
import { fetchMessages } from '../../actions/message_actions'
import ConversationForm from './conversation_form'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
    conversationId: Object.keys(state.entities.conversations)[0],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (conversationId) => dispatch(fetchMessages(conversationId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationForm)
