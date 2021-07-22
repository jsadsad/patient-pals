import { connect } from 'react-redux'
import { fetchConversations } from '../../actions/conversation_actions'
import { getUserConversations } from '../../selectors/selectors'
import UserConversations from './user_conversations'

const mapStateToProps = ({ entities, session }) => {
  return {
    userId: session.id,
    userConversations: getUserConversations(
      Object.values(entities.conversations),
      session.id
    ),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchConversations: () => dispatch(fetchConversations()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserConversations)
