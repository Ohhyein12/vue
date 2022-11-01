<template>
  <input type="text" v-model="msg" />
</template>

<script>
export default {
  emits: ["msg"],
  data() {
    return {
      msg: "",
    };
  },
  watch: {
    msg() {
      this.$emit("msg", this.msg);
    },
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