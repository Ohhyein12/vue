<template>
  <div>
    <ChildComp userName="Hyein" />
    <ChildComp :userName="username" />
    <ChildComp v-bind:userName="username" />
    <button @click="changeName">Change Name</button>
    <!-- userName prop을 빈 값으로 놔둔 경우 default 적용-->
    <ChildComp />
  </div>
</template>

<script>
import ChildComp from "@/components/ChildComp";

export default {
  name: "parent-comp",
  components: { ChildComp },
  data() {
    return {
      username: "Ohhyein",
    };
  },
  // 버튼을 클릭하면 username이 변하는 함수도 만들어보자!
  methods: {
    changeName() {
      this.username = "BlackPink";
    },
  },
};
</script>