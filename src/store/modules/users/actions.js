import * as types from './mutation-types'
import {Users} from '../../../services/resources'

export default {
  setUser: ({commit}, searchString) => {
    if (!searchString.replace(/\s/g, '').length) {
      commit(types.CLEAR_USER)
      return
    }
    Users(searchString).then(response => {
      commit(types.SET_USER, response.data)
    }).catch(error => {
      if (error.status === 404) {
        commit(types.SET_USER, ['not_found'])
      }
    })
  },
  clearUser: ({commit}) => {
    commit(types.CLEAR_USER)
  }
}
