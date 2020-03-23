<template>
      <div class="card">
              <span>{{data.name}}</span>
              <div class="card-detail">
                  <span>Cases : {{data.cases}} </span>
                <span>Death : {{data.death}}</span>
                <span>Recovered: {{data.recovered}} </span>
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