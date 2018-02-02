/**
 * Get users information.
 *
 * @param {string} userName
 *
 * @return {Promise}
 */
export const Users = (userName) => {
  // eslint-disable-next-line
  return Vue.http.get('users{/userName}', {params: {userName}})
}

/**
 * Get user repositories list.
 *
 * @param {string} userName
 *
 * @return {Promise}
 */
export const Repositories = (userName) => {
  // eslint-disable-next-line
  return Vue.http.get('users{/userName}/repos', {params: {userName}})
}
