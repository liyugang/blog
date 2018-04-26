<template>
  <div id="pageQuiButton">
    <!--使用-->
    <qui-btn msg="确定" class="small with-icon" v-on:btnClickEvent="doSth">
      <img slot="icon" class="ico" src="../assets/logo.png" />
    </qui-btn>
  </div>
</template>
<script>
import quiBtn from "../components/quiButton.vue"; /*引用*/
export default {
  name: "pageQuiButton",
  components: {
    "qui-btn": quiBtn /*注册自定义标签*/
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
