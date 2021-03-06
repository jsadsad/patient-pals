import { connect } from 'react-redux'
import { createConversation } from '../../../actions/conversation_actions'
import IndexItem from './index_item'

const mapDispatchToProps = (dispatch) => {
  return {
    createConversation: (conversation) =>
      dispatch(createConversation(conversation)),
  }
}

export default connect(null, mapDispatchToProps)(IndexItem)
