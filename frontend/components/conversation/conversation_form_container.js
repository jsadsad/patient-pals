import { connect } from 'react-redux'
import { createConversation } from '../../actions/conversation_actions'
import ConversationForm from './conversation_form'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createConversation: (conversation) =>
      dispatch(createConversation(conversation)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationForm)
