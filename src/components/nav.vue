<template>
  <div id="app">
    <nav class="navbar navbar-default  navbar-static-top">
      <div class="container-fluid top-title">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" href="#/">
            <img alt="Brand" class="logo icon" src="../assets/logo.png">
          </a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#/">首页</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">发现 <span class="sr-only">(current)</span></a></li>
            <li><a href="#">话题</a></li>
          </ul>
          <form class="navbar-form navbar-left">
            <div class="form-group">
              <input v-model="serachtext" type="text" class="form-control" placeholder="搜索你感兴趣的内容...">
            </div>
            <button type="submit" class="btn btn-default" v-on:click="doSth">提问</button>
          </form>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <a class="navbar-brand" href="#">
                <img alt="Brand" class="notice icon" src="../assets/notice.png">
              </a>
            </li>
            <li>
              <a class="navbar-brand" href="#">
                <img alt="Brand" class="chat icon" src="../assets/chat.png">
              </a>
            </li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <img alt="Brand" class="chat icon" src="../assets/logo.png">
              </a>
              <!-- <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a> -->
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      serachtext: ""
    };
  },
  methods: {
    doSth: function() {
      alert("搜索" + this.serachtext);
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
.icon {
  height: 20px;
  width: 20px;
}
.top-title {
  margin-left: 10%;
  margin-right: 10%;
}
.navbar {
  background-color: #fff;
  position: fixed;
  width: 100%;
}
</style>
