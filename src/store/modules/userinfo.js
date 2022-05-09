
// initial state
// shape: [{ id, quantity }]
const state = {
    user: {
        user_id:1,
        user_name:"张三",
        permission_list:["List","Detail","Manage"]
     }
}

export default {
    namespaced: true,
    state
}