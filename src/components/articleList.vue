<template>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="mod-module mod-parallel">
          <h4 class="media-heading tips">{{articleList[index].tips}}</h4>
          <div class="media">
            <div class="media-left">
              <a href="#">
                <img class="media-object" data-src="holder.js/64x64" alt="64x64" src="../assets/logo.png" data-holder-rendered="true" style="width: 18px; height: 18px;">
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading name">{{articleList[index].name}}<samp class="media-heading introduction">,{{articleList[index].introduction}}</samp></h4>
            </div>
            <h4 class="media-heading title">{{articleList[index].title}}</h4>
            <b class="sum" v-show="!articleList[index].ifReadMore">{{articleList[index].sum}}<samp><a v-on:click="readMore(articleList,index)">阅读全文</a></samp></b>
            <b class="sum" v-show="articleList[index].ifReadMore">{{articleList[index].content}}</b>
          </div>
        </div>
        <bottomFeaturesList :ifReadMore="articleList[index].ifReadMore" @ifReadMore="readMore(articleList,index)"></bottomFeaturesList>
    </div>
  </div>
</template>

<script>
import pagecreate from "../components/pagecreate.vue"; /*引用*/
import bottomFeaturesList from "../components/bottomFeaturesList.vue"; /*引用*/
export default {
  name: "App",
  components: {
    pagecreate: pagecreate /*注册自定义标签*/,
    bottomFeaturesList: bottomFeaturesList
  },
  props: ["articleList", "index"],
  methods: {
    readMore: function(articleList, index) {
      articleList[index].ifReadMore = !articleList[index].ifReadMore;
    }
  }
};
</script>
<style scoped>
@import "https://cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css";
@import "./css/article.css";
.panel {
  text-align: left;
  width: 55%;
  margin-left: 10%;
  margin-bottom: 10px;
  display: flex;
}
.tips {
  color: #8590a6;
  font-size: 15px;
}
.name {
  color: #000;
  font-size: 15px;
}
.introduction {
  color: #646464;
  font-size: 15px;
}
.title {
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.sum {
  font-size: inherit;
  font-weight: 400;
  font-style: normal;
  color: #000;
}
</style>
