<template>
  <div id="app">
    <nav>
      <router-link to="/signin">Sign In</router-link> |
      <router-link to="/signup">Sign Up</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>