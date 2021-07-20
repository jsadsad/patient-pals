import { connect } from 'react-redux'
import { fetchUsers } from '../../../actions/user_actions'
import Index from '../index'

const mapStateToProps = ({ entities, session }) => {
  return {
    users: Object.values(entities.users),
    currentUser: entities.users[session.id],
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
