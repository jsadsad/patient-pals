import { connect } from 'react-redux'
import { createMessage, fetchMessages } from '../../actions/message_actions'
import { clearConversation } from '../../actions/conversation_actions'
import MessageForm from './message_form'

const mapStateToProps = (state, ownProps) => {
  return {
    conversation: state.entities.conversations,
    conversationId: ownProps.conversationId,
    messages: state.entities.messages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processMessage: (message) => dispatch(createMessage(message)),
    clearConversation: () => dispatch(clearConversation()),
    fetchMessages: (id) => dispatch(fetchMessages(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
