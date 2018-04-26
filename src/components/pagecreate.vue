<template>
  <div id="pagecreate">
    <div class="panel panel-default">
      <div class="panel-body">
        <a href="#">
          <noBgButton msg="提问" class="small with-icon" v-on:btnClickEvent="doSth1">
            <img slot="icon" class="ico" src="../assets/question.png" />
          </noBgButton>
        </a>
        <a href="#">
          <noBgButton msg="回答" class="small with-icon" v-on:btnClickEvent="doSth2">
            <img slot="icon" class="ico" src="../assets/answer.png" />
          </noBgButton>
        </a>
        <a href="#">
          <noBgButton msg="写文章" class="small with-icon" v-on:btnClickEvent="doSth3">
            <img slot="icon" class="ico" src="../assets/write.png" />
          </noBgButton>
        </a>
        <a href="#">
          <noBgButton msg="写想法" class="small with-icon" v-on:btnClickEvent="doSth4">
            <img slot="icon" class="ico" src="../assets/idea.png" />
          </noBgButton>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import noBgButton from "./noBgButton.vue"; /*引用*/
export default {
  name: "pagecreate",
  components: {
    noBgButton: noBgButton /*注册自定义标签*/
  },
  methods: {
    doSth1: function() {
      this.$router.push({ path: "/editor" });
    },
    doSth2: function() {
      this.$router.push({ path: "/editor" });
    },
    doSth3: function() {
      this.$router.push({ path: "/editor" });
    },
    doSth4: function() {
      this.$router.push({ path: "/editor" });
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
.pagecreate {
  margin-top: -10px;
}
.panel {
  text-align: left;
  width: 55%;
  margin-left: 10%;
  margin-top: 70px;
}
.panel a {
  margin-right: 40px;
}
.ico {
  margin-right: 7px;
}
</style>
