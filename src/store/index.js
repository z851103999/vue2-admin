import Vue from 'vue'
import Vuex, {createLogger} from 'vuex'
import getters from './getters'
import user from './modules/user'
import settings from "@/store/modules/settings";

Vue.use(Vuex)


const store = new Vuex.Store({
  modules: {
    user,
    settings,
  },
  getters,
  //Logger日志
  plugins: [createLogger()]
})

if (module.hot) {
  // 使 action 和 mutation 成为可热重载模块
  module.hot.accept([
    './user',
    './settings'
  ], () => {
    // 获取更新后的模块
    // 因为 babel 6 的模块编译格式问题，这里需要加上 `.default`
    const user = require('../store/modules/user').default
    const setting = require('../store/modules/settings').default
    // 加载新模块
    store.hotUpdate({
      user,
      setting
    })
  })
}

export default store
