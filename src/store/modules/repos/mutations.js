import * as types from './mutation-types'

export default {
  [types.SET_USER_REPOS] (state, payload) {
    state.userRepos = payload
  },
  [types.CLEAR_USER_REPOS] (state) {
    state.userRepos = []
  }
}
