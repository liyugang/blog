<template>
  <button class="qui-btn" v-on:click="btnClickEvent"
    v-bind:style="{ 'border-color': color, 'background-color': color, 'color':textcolor, 'height':height, 'weight':weight, 'z-index': msg?1:-1 }">
    <slot name="icon"></slot>
    <span>{{msg}}</span>
  </button>
</template>

<script>
export default {
  props: {
    msg: {
      default: "下载"
    },
    color: {
      default: "#C3C8CC"
    },
    textcolor: {
      default: "#8590a6"
    },
    height: {
      default: "30px"
    },
    weight: {
      default: "60px"
    }
  },
  methods: {
    //绑定事件的关键代码
    btnClickEvent: function() {
      alert("先弹出默认的文案");
      this.$emit("btnClickEvent"); //关键代码父组件触发自定义事件
    }
  }
};
</script>
<style scoped>
@import "./css/reset.import.css";
@import "./css/qui-btn.import.css";
</style>
