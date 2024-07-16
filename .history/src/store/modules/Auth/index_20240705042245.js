import mutations from "./mutation"
import actions from "./actions"
import getters from "./getters"
export default {
    namespaced:true,
    state:{
            email:'',
            password:'',
            userId:'',
            refreshToken:'',
            expiresIn:''
        
    },
    getters,
    mutations,
    actions
}