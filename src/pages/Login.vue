<template>
  <div>
    <div>This is Login.vue</div>
    <div> this is router test : {{text}} </div>
    <div> text : {{$route.params.age}}</div>
  </div>
</template>

<script>
export default {
  name : "login",
  props : {
    text : {
      type : String,
      default : "I'm default",
    }
  }
};
</script>

<style>
</style>
