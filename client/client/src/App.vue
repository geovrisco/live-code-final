<template>
  <div id="app">
    <div v-if="$store.state.isLogin">
      <div id="nav">
        <router-link to="/">Countries</router-link> |
        <router-link to="/about">Profile</router-link> |
        <router-link to="/about">Logout</router-link>
      </div>
      <router-view/>
    </div>
    <div v-else>
        <loginF></loginF>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>

import loginF from './views/login.vue'

export default {
  components:{
    loginF
  }
}
</script>