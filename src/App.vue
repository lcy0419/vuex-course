<template>
  <div id="app">
    <!-- getters -->
    <p>App.vue:{{count}}</p>
    <p>{{completedTodos}}</p>
    <p>{{completedTodosCount}}</p>
    <p>{{getTodosById(1)}}</p>
    <count />
  </div>
</template>

<script>
import count from "./components/Count";
import { mapState, mapGetters } from "vuex";
export default {
  name: "app",
  components: { count },
  computed: mapGetters([
    "Count",
    "completedTodos",
    "completedTodosCount",
    "getTodosById"
  ])
  // computed: {
  //   count() {
  //     return this.$store.getters.getCount;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosById() {
  //     return this.$store.getters.getTodosById;
  //   }
  // }
};
</script>

<style>
</style>
