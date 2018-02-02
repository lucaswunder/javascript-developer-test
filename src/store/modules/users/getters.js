export default {
  getUser: (state) => {
    return state.userInfo ? state.userInfo : ''
  }
}
