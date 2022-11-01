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
  routes, // short for `routes: routes`
})

const member = {
  namespaced: true,
  state() {
    return {
      memberCount: 100,
      coupon: 5
    }
  },

  mutations: {
    doubleCoupon(state) {
      state.coupon *= 2
    },
    lala() {

    }
  }
}

const store = createStore({
  state() {
    return {
      count: 0,
      cartCount: 0,
      productCount: 100
    }
  },
  getters: {
    double(state) {
      return state.count * 2;
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  },
  modules: {
    memberModule: member
  }
})

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
