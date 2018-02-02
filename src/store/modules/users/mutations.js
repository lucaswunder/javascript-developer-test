import * as types from './mutation-types'

export default {
  [types.SET_USER] (state, payload) {
    state.userInfo = payload
  },
  [types.CLEAR_USER] (state) {
    state.userInfo = []
  }
}
