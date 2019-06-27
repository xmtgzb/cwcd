<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <cube-button type="submit">Submit Button</cube-button> -->
    <cube-button class="ss" type="submit">Submit Button</cube-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang = "scss" type='text/css'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60PX;

}
</style>
