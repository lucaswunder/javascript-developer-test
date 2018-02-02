import * as types from './mutation-types'

import {Repositories} from '../../../services/resources'

export default {
  setUserRepos: ({commit}, userName) => {
    Repositories(userName).then(response => {
      commit(types.SET_USER_REPOS, response.data)
    }).catch(error => {
      if (error.status === 404) {
        console.log(error.status)
      }
    })
  },
  clearUserRepos: ({commit}) => {
    commit(types.CLEAR_USER_REPOS)
  }
}
