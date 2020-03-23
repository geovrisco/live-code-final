<template>
  <div class="about">
    <h1>Profile</h1>
    <form @submit.prevent="submitFind(find)">
      <select id="cars" v-model="find.id">
        <option  v-for="(data,num) in this.$store.state.lists" :key="num" 
        :value="data.id" >{{data.name}}
        </option>
    </select>
    <input type="text" placeholder="number of cases" v-model="find.cases">
    <input type="submit">
    </form>
    <div class="div-card-holder">
    <div v-for="(data,num) in this.$store.state.reports" :key="num"  >
        <reportcard :data="data">
        </reportcard>
    </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import reportcard from '../components/reportcard.vue'
import Swal from 'sweetalert2'
export default {
  components:{
    reportcard,
  },
  created () {
    this.$store.dispatch('getAllData')
    this.$store.dispatch('getAllReport')
    console.log(this.$store.state.reports)
    // console.log(this.$store.state.lists[0].name)
  },
  data: function() {
    return {
      find:{
        id:'',
        cases:''
      }
    }
  },
  methods:{
    submitFind(find){
      console.log(find)
      axios({
        method:'post',
        url:'Http://localhost:3000/reports',
        data:{
          cases:find.cases,
          CountryId:find.id,
        },
        headers:{token:localStorage.getItem('token')}
      })
      .then(data=>{
        this.$store.commit('pushNewReport',data.data)
      })
      .catch(err=>{
        Swal.fire({
          icon: 'error',
          title: `isi dong Semua`,
          text: `isi dong SEMUA`,
          footer: '<a href>Why do I have this issue?</a>'
        })
      })
    },
  
  },
}
</script>
