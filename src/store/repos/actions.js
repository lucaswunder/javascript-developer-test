import * as types from './mutation-types'

import {Users} from '../../services/resources'

export default {
  setUser: ({commit}, searchString) => {
    Users(searchString).then(response => {
      commit(types.GET_USER, response.data)
      console.log(response.status)
    }).catch(error => {
      if (error.status === 404) {
        console.log(error.status)
      }
    })
  }
}
