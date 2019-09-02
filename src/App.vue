<template>
  <div id="app">
    <p>App.vue:{{count}}</p>
    <p>App.vue:{{todos}}</p>
    <count />
  </div>
</template>

<script>
import count from "./components/Count";
import { mapState } from "vuex";
export default {
  name: "app",
  components: { count },
  //写法3
  computed: mapState(["count", "todos"])

  //写法2
  // computed: mapState({
  //   // count: function(state) {
  //   //   return state.count;
  //   // },
  //   count: state => state.count,
  //   todos: state => state.todos
  // })

  //写法1
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }
};
</script>

<style>
</style>
