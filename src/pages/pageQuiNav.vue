<template>
  <div id="pageQuiNav">
    <!--使用-->
    <qui-nav>
    </qui-nav>
  </div>
</template>
<script>
import quiNav from "../components/quiNav.vue"; /*引用*/
export default {
  name: "pageQuiNav",
  components: {
    "qui-nav": quiNav /*注册自定义标签*/
  },
  methods: {
    doSth: function() {
      alert("你点击了组件的click:btnClickEvent");
    }
  }
};
</script>

<style>
.ico {
  height: 12px;
  width: 12px;
}
</style>
