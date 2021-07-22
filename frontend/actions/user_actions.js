import * as UserApiUtil from '../utils/user_api_util'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export const fetchUsers = () => (dispatch) => {
  return UserApiUtil.fetchUsers().then((users) => dispatch(receiveUsers(users)))
}

export const fetchUser = (userId) => (dispatch) => {
  return UserApiUtil.fetchUser(userId).then((users) =>
    dispatch(receiveUsers(users))
  )
}
