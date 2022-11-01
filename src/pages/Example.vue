<template>
  <div>
    <div>{{ msg }}</div>
    <div v-text="msg"></div>
    <div v-if="isView">hi</div>
    <div v-for="(num, index) in arr" : key="index">
      {{ num }}
    </div>
    <div v-bind:name="myName"></div>
    <div v-on:click="myAlert()">클릭</div>
    <div @click="myAlert()">클릭</div>
    <My-div></My-div>
  </div>
</template>

<script>
import MyDiv from "./components/MyDiv.vue";

export default {
  name: "App",
  components: {
    MyDiv,
  },
  data() {
    return {
      msg: "This is message",
      isView: true,
      arr: [1, 2, 3, 4],
      myName: "mymymy",
    };
  },
  methods: {
    myAlert() {
      alert("clicked");
    },
  },
  created() {
    alert("dafd");
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
