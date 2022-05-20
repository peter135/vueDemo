
// initial state
// shape: [{ id, quantity }]
const state = {
    user: {
        user_id:1,
        user_name:"张三",
        permission_list:["List","Detail","Manage"]
     },
     addedRoutes:false,
     menuListData:[{
            type: "group",
            name: "通用",
            id: "1",
            children: [
                {
                    type: "item",
                    name: '透明输入框',
                    path: '/docs/inputdoc',
                    id: "1-1"
                },
                {
                    type: "item",
                    name: '菜单',
                    path: '/docs/menudoc',
                    id: "1-2"
                }
            ]
        },
        {
            type: "subItem",
            name: "测试",
            id: "2",
            children: [
                {
                    type: "subItem",
                    name: '测试',
                    id: "2-1",
                    children: [
                        {
                            type: "item",
                            name: '测试',
                            path: '/docs',
                            id: "2-1-1",
                            checked: true
                        },
                        {
                            type: "item",
                            name: '测试',
                            path: '/docs',
                            id: "2-1-2"
                        }
                    ]
                }
            ]
        }],
    showLoading:false,
    loadingText:'Loading'

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