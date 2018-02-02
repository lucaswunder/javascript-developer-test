<template>
    <div>
      <div class='container'>
        <div class='box'>
          <h1 class='box-text'>Search For Github User</h1>
          <img :src="imgAvatarUrl" alt="">
          <p class='box-text'>
            <span>GitHub.com/</span>
            <input @input="searchUser" v-model="searchString" class='box-field'
            type="text" placeholder="Type here">
            <span v-if="load" class='box-tip'>We are looking for the user</span>
            </p>
          <div v-if="load" class='center loader'>
            <div class='loader-line a-loop'>
            </div>
          </div>
          <div v-if="getUser.login" class='box-title'>
            <router-link :to="{ name: 'repositories', params: { userName: userInfo.login }}">Repositories</router-link>
          </div>
          <div v-else class='box-title'>
            {{ userInfo == 'not_found' ? 'Not Found' : '' }}
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import {mapActions, mapState, mapGetters} from 'vuex'
import _ from 'lodash'
export default {
  data () {
    return {
      searchString: '',
      load: false
    }
  },
  computed: {
    ...mapState('Users', ['userInfo']),
    ...mapGetters('Users', ['getUser']),
    imgAvatarUrl: function () { // eslint-disable-next-line
      return this.getUser == 'not_found' || this.getUser == '' ? 'https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png' : this.userInfo.avatar_url
    }
  },
  methods: {
    ...mapActions('Users', ['setUser']),
    getUserInfo: _.debounce(
      function () {
        this.setUser(this.searchString)
        this.load = false
      },
      800
    ),
    searchUser () {
      this.load = true
      this.getUserInfo()
    }
  }
}
</script>
