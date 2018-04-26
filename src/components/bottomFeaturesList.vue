<template>
  <div id="bottomFeaturesList">
    <a>
      <quiButton msg="412" color="#e7f3ff" class="small with-icon" v-on:btnClickEvent="doSth1">
        <img slot="icon" class="ico" src="../assets/vote-up.png" />
      </quiButton>
    </a>
    <a>
      <noTextButton  color="#e7f3ff" padding="4px" class="small with-icon"  v-on:btnClickEvent="doSth2">
        <img slot="icon" class="ico" src="../assets/vote-down.png" />
      </noTextButton>
    </a>
    <a>
      <noBgButton msg="167条评论" class="small with-icon" v-on:btnClickEvent="doSth3">
        <img slot="icon" class="ico" src="../assets/comment.png" />
      </noBgButton>
    </a>
    <a>
      <noBgButton msg="分享" class="small with-icon" v-on:btnClickEvent="doSth4">
        <img slot="icon" class="ico" src="../assets/share.png" />
      </noBgButton>
    </a>
    <a>
      <noBgButton msg="收藏" class="small with-icon" v-on:btnClickEvent="doSth5">
        <img slot="icon" class="ico" src="../assets/collection.png" />
      </noBgButton>
    </a>
    <a>
      <noBgButton msg="感谢" class="small with-icon" v-on:btnClickEvent="doSth6">
        <img slot="icon" class="ico" src="../assets/thanks.png" />
      </noBgButton>
    </a>
    <a>
      <noBgButton msg="" class="small with-icon" v-on:btnClickEvent="doSth7">
        <img slot="icon" class="ico" src="../assets/ellipsis.png" />
      </noBgButton>
    </a>
    <a class="getup" v-show="ifReadMore">
      <noBgButton msg="收起" class="small with-icon" v-on:btnClickEvent="doSth8">
        <img slot="icon" class="ico" src="../assets/getup.png" />
      </noBgButton>
    </a>
  </div>
</template>

<script>
import noBgButton from "./noBgButton.vue"; /*引用*/
import noTextButton from "./noTextButton.vue"; /*引用*/
import quiButton from "./quiButton.vue"; /*引用*/
export default {
  name: "bottomFeaturesList",
  components: {
    noBgButton: noBgButton /*注册自定义标签*/,
    quiButton: quiButton /*注册自定义标签*/,
    noTextButton: noTextButton /*注册自定义标签*/
  },
  props: ["ifReadMore"],
  methods: {
    doSth1: function() {},
    doSth2: function() {},
    doSth3: function() {},
    doSth4: function() {},
    doSth5: function() {},
    doSth6: function() {},
    doSth7: function() {},
    doSth8: function() {
      this.$emit("ifReadMore"); //关键代码父组件触发自定义事件
    }
  }
};
</script>

<style scoped>
@import "https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.panel {
  text-align: left;
  width: 60%;
  margin-left: 10%;
}
.panel a {
  margin-right: 10px;
}
.ico {
  width: 20px;
  height: 20px;
  margin-right: 7px;
}
.getup {
  float: right;
  margin-top: 7px;
}
</style>
