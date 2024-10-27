<template>
<div class="hello">
    <h1>{{ msg }}</h1>
    <nav v-if="!isAuthenticated">
      <router-link to="/signin">Sign In</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['user']),
    isAuthenticated() {
      return this.user.isAuthenticated;
    },
  },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>