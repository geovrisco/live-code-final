import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin:false,
    lists:[],
    reports:[]
  },
  mutations: {
    loginTrue(state){
      state.isLogin=true
    },
    pushLists(state,payload){
      state.lists=[]
      state.lists=payload
    },
    getReports(state,payload){
      state.reports=[]
      state.reports=payload
    },
    pushNewReport(state,payload){
      state.reports.push(payload)
    }
  },
  actions: {
    getAllData(context){
      axios({
        method:'GET',
        url:'Http://localhost:3000/countries',
        headers:{token: localStorage.getItem('token')}
      })
      .then(data=>{
        context.commit('pushLists',data.data)
      })
      .catch(err=>{

      })
    },
    getAllReport(context){
      axios({
        method:'get',
        url:'Http://localhost:3000/reports',
        headers:{token:localStorage.getItem('token')}
      })
      .then(data=>{
        context.commit('getReports',data.data)
      })
      .catch(err=>{
        console.log(err)
      })
    },
  },
  modules: {
  }
})
