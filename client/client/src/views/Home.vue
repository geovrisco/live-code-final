<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="div-card-holder">
      <div v-for="(data,num) in this.$store.state.lists" :key="num" >
        <Card :data="data"></Card>
      </div>
    </div>
  </div>
</template>

<script>

import Card from '../components/datacard.vue'
export default {
  components: {
    Card
  },
  created () {
    this.$store.dispatch('getAllData')
    // console.log(this.$store.state.lists)
    // console.log(this.$store.state.lists[0].name)
  }
}
</script>
