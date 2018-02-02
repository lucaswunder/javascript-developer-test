import * as types from './mutation-types'

export default {
  [types.GET_USER] (state, payload) {
    state.userInfo = payload
  }
}
