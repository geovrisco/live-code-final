<template>

<div>
  <form @submit.prevent="funcLogin(login)">
          <label for="fname">username:</label><br>
          <input v-model="login.username" type="text" id="fname" name="fname" placeholder="username"><br>
          <label for="lname">password:</label><br>
          <input v-model="login.password" type="password" id="lname" name="lname" ><br><br>
          <input type="submit" value="Login">
      </form> 
</div>

</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      login:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    funcLogin(login){
      axios({
        method: 'post',
        url: 'Http://localhost:3000/login',
        data:{
          username:login.username,
          password:login.password
        }
      })
      .then(data=>{
        console.log(data)
        console.log('sukses')
        localStorage.setItem('token',data.data.token)
        localStorage.setItem('id',data.data.id)
        localStorage.setItem('username',data.data.username)
        this.$store.commit('loginTrue')
      })
      .catch(err=>{
        console.log(err.response)
        Swal.fire({
          icon: 'error',
          title: `${err.response.data.message}`,
          text: `${err.response.data.errors}`,
          footer: '<a href>Why do I have this issue?</a>'
        })
      })
    }
  }
}
</script>