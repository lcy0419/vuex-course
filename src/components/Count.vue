<template>
  <div id="count">
    <div>
      <hr />
      <h1>{{count}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
};
</script>

<style>
</style>
