// 该文件用于创建Vuex中最核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from "vuex"
Vue.use(Vuex)

const global = {
    namespace:true,
    // 准备action---用于响应组件中的动作
    actions:{},
    // 准备mutations---用于操作数据
    mutations:{},
    // 准备state---用于存储数据
    state:{},
    // 准备getters---用于将state中的数据进行加工
    // 类似计算属性
    getters:{}
}

/*
* 这里写import
* */

//暴露store 并创建
export default new Vuex.Store({
    modules:{
    }
})