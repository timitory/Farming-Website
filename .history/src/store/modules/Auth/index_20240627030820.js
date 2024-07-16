import mutations from './mutation.js'
import actions from './actions.js'
import getters from './getters.js'
export default{
    namespaced:true,
    state(){
        return{
            name:'TimiTech'
        }
    },
    getters,
    mutations,
    actions,
}