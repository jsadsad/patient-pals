import { connect } from 'react-redux'
import { createMessage } from '../../actions/message_actions'
import { clearConversation } from '../../actions/conversation_actions'
import MessageForm from './message_form'

const mapStateToProps = (state, ownProps) => {
  return {
    conversationId: ownProps.conversationId,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processMessage: (message) => dispatch(createMessage(message)),
    clearConversation: () => dispatch(clearConversation()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
