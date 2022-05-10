
// initial state
// shape: [{ id, quantity }]
const state = {
    user: {
        user_id:1,
        user_name:"张三",
        permission_list:["List","Detail","Manage"]
     },
     addedRoutes:false
}

const actions = {
    addedRoutesFlagAction({ commit, state }, flag) {
        commit('setAddedRoutesFlag', flag)
    }

}

const mutations = {
    setAddedRoutesFlag (state, flag) {
      state.addedRoutes = flag
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}