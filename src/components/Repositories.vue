<template>
    <div>
      <div>
      <div class='container'>
        <div class='box'>
          <h1 class='box-text'>Github User</h1>
          <img :src="userInfo.avatar_url" alt="">
          <p class='box-text'>
            <span>GitHub.com/{{ userInfo.login }}</span>
          </p>
          <h1 class='box-text'>Your Repositories</h1>
          <ul v-if="userRepos!=''" class="repository-list">
            <li v-for="(item,index) in userRepos" :key="index">
                <a :href="item.html_url" target="_blank">{{index+1}} - {{item.name}}</a>
            </li>
          </ul>
          <a @click.prevent="backPage" href="/">Back</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState, mapGetters} from 'vuex'
export default {
  data () {
    return {
    }
  },
  created () {
    this.setUserRepos(this.userInfo.login)
  },
  methods: {
    ...mapActions('Users', ['clearUser']),
    ...mapActions('Repos', ['setUserRepos', 'clearUserRepos']),
    backPage () {
      this.clearUser()
      this.clearUserRepos()
      this.$router.push({name: 'main'})
    }
  },
  computed: {
    ...mapState('Users', ['userInfo']),
    ...mapState('Repos', ['userRepos']),
    ...mapGetters('Repos', ['getUserRepos'])
  }
}
</script>
