import { connect } from 'react-redux'
import { createConversation } from '../../actions/conversation_actions'
import ConversationForm from './conversation_form'

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.id,
    conversationId: Object.keys(state.entities.conversations)[0],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createConversation: (conversation) =>
      dispatch(createConversation(conversation)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationForm)
