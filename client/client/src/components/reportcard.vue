<template>
      <div class="card">
              <span>{{data.Country.name}}</span>
              <div class="card-detail">
                  <span>Cases : {{data.cases}} </span>
              </div>
        </div>
</template>
<script>
export default {
  props:['data'],
  created () {
    // console.log(this.data,'this')
    // console.log(data,'ini bkn this')
  }
}
</script>