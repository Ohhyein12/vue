<template>
  <div>
    <button @click="$store.commit('increment')">증가</button>
    <button @click="$store.commit('memberModule/doubleCoupon')">
      멤버 모듈 더블
    </button>
    <button @click="doubleCoupon">helper 더블 쿠폰</button>
    <div>count : {{ $store.state.count }}</div>
    <div>doubleCount(getters) : {{ $store.getters.double }}</div>
    <div>NoHelper.coupon : {{ $store.state.memberModule.coupon }}</div>
    <div>
      NoHelper.reverseText : {{ $store.getters["memberModule/reverseText"] }}
    </div>
    <div>Helper.coupon : {{ coupon }}</div>
    <div>helper.getters.reverseText : {{ reverseText }}</div>
    <Main></Main>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
import Main from './pages/Main.vue';

const { mapState, mapMutations, mapGetters } =
  createNamespacedHelpers("memberModule");

export default {
  name: "App",
  components: {
    Main
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["memberCount", "coupon"]),
    ...mapGetters(["reverseText"]),
  },
  methods: {
    ...mapMutations(["doubleCoupon"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
