<template>
  <div id="app">
    <mynav></mynav>
    <router-view></router-view>
  </div>
</template>

<script>
import mynav from "./components/nav.vue"; /*引用*/
export default {
  name: "App",
  components: {
    mynav: mynav /*注册自定义标签*/
  }
};
</script>

<style>
@import "https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f6f6f6;
}
.icon {
  height: 20px;
  width: 20px;
}
</style>
