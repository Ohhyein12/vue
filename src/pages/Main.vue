<template>
  <div>
    This is Main.vue
    <button @click="getList()">요청</button>
    <div v-for="(num, index) in arr" :key="index">
      <div>id : {{ num.id }}</div>
      <div>email : {{ num.email }}</div>
      <div>first_name : {{ num.first_name }}</div>
      <div>last_name : {{ num.last_name }}</div>
      <div>
        avatar : <a v-bind:href="num.avatar">{{ num.avatar }}</a>
      </div>

      <div>------------------------------------------------</div>
    </div>
    =================================================
    <Login :text=test()></Login>
  </div>
</template>

<script>
import axios from "axios";
import { mapMutations } from "vuex";
import Login from './Login.vue';

export default {
  name : "main",
  components: { Login },
  data() {
    return {
      arr: [],
    };
  },
  methods: {

    test() {
      this.$router.push({ name: 'login', params: { text : 'test입니다' }, props : true })
    },

    async getList() {
      try {
        var list = await axios.get("https://reqres.in/api/users?page=2");
        this.arr = list.data.data;
      } catch (error) {
        console.log("error");
      }
    },
    ...mapMutations("memberModule", ["doubleCoupon"]),
  },
};
</script>

<style>
</style>
