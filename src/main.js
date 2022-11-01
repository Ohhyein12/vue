import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Main from './pages/Main.vue'
import Login from './pages/Login.vue'
import { createStore } from 'vuex'

const routes = [
  { path: '/', component: Main },
  { path: '/login', component: Login },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // 라우터정보를 가지고 생성해서 vue에 사용할 것 임을 선언
})

const member = {
  namespaced: true,
  state() {
    return {
      memberCount: 100,
      coupon: 3500,
      letter: "hyein"
    }
  },
  mutations: {
    doubleCoupon(state) {
      state.coupon *= 2
    }
  },
  getters: {
    reverseText(state) {
      return state.letter.split('').reverse().join('');
    }
  },
}

const store = createStore({
  state() {
    return {
      count: 0 //vuex에서 사용할 값
      , cartCount: 0
      , productCount: 100

    }
  },

  mutations: {
    increment(state) {
      state.count++
    }
  },

  getters: {
    double(state) {
      return state.count * 3;
    }
  },

  modules: {
    memberModule: member
  },

  actions: {
    //mutations부를때
  }
})

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')


