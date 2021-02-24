// 管理首页相关数据的vuex子模块

import {navList} from '../../api'

const state = {
    navList: [],
}

const mutations ={
    reset_navList: (state, navList) => {
        state.navList = navList
    }
}

const actions = {

    //首页轮播图数据请求
    async getNavList ({commit}) {
        const result = await navList()
        if (result.code == 200) {
            commit('reset_navList', result.data.cateList)
        }
    }
}

const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}