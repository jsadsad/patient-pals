import { connect } from 'react-redux'
import { fetchUsers } from '../../../actions/user_actions'
import Index from '../index/index'
import { getPatients } from '../../../selectors/selectors'

const mapStateToProps = ({ entities, session }) => {
  return {
    users: getPatients(Object.values(entities.users)),
    currentUser: entities.users[session.id],
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)
