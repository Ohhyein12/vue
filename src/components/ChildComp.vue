<template>
  <div>
    <h3>Hello {{ userName }}</h3>
  </div>
</template>

<script>
export default {
  name: "child-comp",
  //props : ["userName"],
  props: {
    // 아래와 같이 default값을 지정할 수 있다.
    userName: {
      type: String,
      default: "I'm default",
    },
  },
};
</script>