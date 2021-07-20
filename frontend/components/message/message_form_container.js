import { connect } from 'react-redux'
import { createMessage } from '../../actions/message_actions'
import MessageForm from './message_form'

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    processMessage: (message) => dispatch(createMessage(message)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm)
