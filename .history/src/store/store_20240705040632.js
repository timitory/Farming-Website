import { createStore } from 'vuex';
import Signup_Action from './storeconstants.js'
import axios from 'axios';
import Auth from './modules/Auth/store.js'

export default createStore ({
  state: {
    email:'',
    password:'',
  },
  modules:{
    Auth,
  },

  actions:{
    async [Signup_Action](_ ,payload){ 
    let postData={
    email:payload.email,
    password:payload.password,
    returnSecureToken:true,
    }
  let response=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[AIzaSyDQb1GKfEgIGmcZYb2uMdkmTQAwTgrouGE]`,
  postData,)

    }
  
}
})













// getters: {
//   GetUser:(state)=> state.user,
//   IsAuthenticated:(state)=> !!state.Authent
// },
// mutations: {
//   Login(state,SetUser){
//     state.user=SetUser;
//   },
//   Authentication(state,Authenticate){
//     state.Authent=Authenticate;
//   },
//   Logout(state){
//     state.user=null;
//     state.Authent=null;
//   }
// },
// actions: {
//   async login({commit},credentials){
//     const response = await fakeApiCall('./login',credentials)
//     commit('Login',response.SetUser)
//     commit('Authentication',response.Authenticate)
//   },
//   async Register({commit},UserDetails){
//     const response = await fakeApiCall('./register',UserDetails)
//     commit('Login',response.SetUser)
//     commit('Authentication',response.Authenticate)
//   },
//   logout({commit}){
//     commit('Logout')
//   }
// },
// modules: {
// }








// async function fakeApiCall(endpoint, data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (endpoint === '/login') {
//         resolve({ user: { name: 'John Doe' }, token: 'fake-token' });
//       } else if (endpoint === '/register') {
//         resolve({ user: { name: data.name }, token: 'fake-token' });
//       }
//     }, 1000);
//   });
// }
