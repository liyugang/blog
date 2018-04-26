<template>
  <button class="qui-btn" v-on:click="btnClickEvent">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  props: {
    msg: {
      default: "下载"
    }
  },
  methods: {
    //绑定事件的关键代码
    btnClickEvent: function() {
      this.$emit("btnClickEvent"); //关键代码父组件触发自定义事件
    }
  }
};
</script>
<style scoped>
@import "./css/reset.import.css";
@import "./css/noBgBtn.import.css";
</style>
