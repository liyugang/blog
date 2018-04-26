<template>
  <div class="mod-module mod-parallel">
    <pagecreate></pagecreate>

    <div class="panel panel-default right-row1">
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-4 col-item">
            <span class="glyphicon glyphicon-flash" aria-hidden="true"></span>
            <span class="glyphicon-class">Live</span>
          </div>
          <div class="col-xs-4 col-item">
            <span class="glyphicon glyphicon-book" aria-hidden="true"></span>
            <span class="glyphicon-class">书店</span>
          </div>
          <div class="col-xs-4 col-item">
            <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            <span class="glyphicon-class">圆桌</span>
          </div>
          <div class="col-xs-4 col-item">
            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
            <span class="glyphicon-class">专栏</span>
          </div>
          <div class="col-xs-4 col-item">
            <span class="glyphicon glyphicon-usd" aria-hidden="true"></span>
            <span class="glyphicon-class">付费咨询</span>
          </div>
        </div>
      </div>
    </div>

    <div class="panel panel-default right-row2">
      <div class="panel-body">
        <div class="row">
          <div class="col-xs-12">
            <quiList tipsText="我的关注" msg="123">
              <img slot="icon" class="ico" src="../assets/question.png" />
            </quiList>
          </div>
          <div class="col-xs-12">
            <quiList tipsText="我关注的问题" msg="123">
              <img slot="icon" class="ico" src="../assets/question.png" />
            </quiList>
          </div>
          <div class="col-xs-12">
            <quiList tipsText="我的邀请" msg="">
              <img slot="icon" class="ico" src="../assets/question.png" />
            </quiList>
          </div>
          <div class="col-xs-12">
            <quiList tipsText="我的礼券" msg="">
              <img slot="icon" class="ico" src="../assets/question.png" />
            </quiList>
          </div>
          <div class="col-xs-12">
            <quiList tipsText="社区服务中心" msg="">
              <img slot="icon" class="ico" src="../assets/question.png" />
            </quiList>
          </div>
          <div class="col-xs-12">
            <quiList tipsText="版权服务中心" msg="">
              <img slot="icon" class="ico" src="../assets/question.png" />
            </quiList>
          </div>
          <div class="col-xs-12">
            <quiList tipsText="公共编辑动态" msg="">
              <img slot="icon" class="ico" src="../assets/question.png" />
            </quiList>
          </div>
        </div>
      </div>
    </div>

    <div class="articleList" v-for="(article, index) in articleList">
      <articleList :articleList="articleList" :index="index" ></articleList>
    </div>
  </div>
</template>

<script>
import pagecreate from "../components/pagecreate.vue"; /*引用*/
import articleList from "../components/articleList.vue"; /*引用*/
import quiList from "../components/quiList.vue";
export default {
  name: "App",
  components: {
    quiList: quiList /*注册自定义标签*/,
    pagecreate: pagecreate /*注册自定义标签*/,
    articleList: articleList /*注册自定义标签*/
  },
  data: function() {
    return {
      articleList: [
        {
          tips: "来自话题: 心理学",
          headimg: "",
          name: "奥莉安娜",
          introduction: "没错，我就是传说中的中路杀神1",
          title: "面试官问你的优点是什么，应该如何回答？",
          sum:
            "可能你们去的都是小企业，我在世界500强面试的时候，可能你们去的都是，我在世界500强面试的时候，经理只问了我两个问题“你是本地的吧？”“寒暑假能来吗？”当然回答可以的时候，紧接着就开始办手续了…",
          content:
            "在我看来，职业选手恐怖的操作有三种：1、手速无敌型  2、临时应变型 3、手速+应变型一、手速无敌型这类操作常见于dota中的卡尔、米波等英雄，我们来看几个小视频。                                                    dendi练习卡尔的操作                                                                  奇迹哥卡尔                                                            Abed绝活米波这几个视频里，第一个dendi练习卡尔，几乎纯粹靠手速，养成肌肉记忆；第二个奇迹哥的卡尔需要一些发挥，但也基本上是切技能，可以看到他技能切得确实太tmd快了；后面米波单杀对手速要求一般，但团战中那个米波向两个方向撒网，然后杀人，这个就比较屌了。2、临时应变型这种操作要非常认真地观察场上局势，可能只是一个谜团大，一个兔子大，一个潮汐大就有可能扭转局势，当然，也需要对手的配合。这个视频中，潮汐和萨尔几乎同时放大，职业选手对机会的把握可见一斑。还有这个经典的TI6shadow帮跳刀跳刀挡箭的镜头，也是神来之笔。在这个之前，还有shadow跳刀意识大杀Moo的镜头。当时moo在白虎大里面，shadow跳过去大，太自信了。3、手速+应变不得不提奇迹卡，可以1V9的存在。这个看过的人都知道，团战打了两分钟，奇迹哥一个人杀了对面两遍，其中不乏手速超快的操作，甚至在团战之余奇迹哥还点了个金，但是最重要的是奇迹哥对局势的判断，对技能的选择和释放，堪称教科书。最后解说也说了，这是Miracle show。不得不吹一下B神，之前许多人都知道这一段，但可能少有看过B神第一视角的。B神在这波团战中，只要是A对方英雄，必定敏捷腿；用技能，必定智力腿；剑圣无敌斩的时候，切了力量腿。看起来平淡无奇，实际上脑子里在疯狂操作。这就是职业选手和普通人的差距吧。",
          zanCount: 0,
          ifZan: false,
          commentCount: 0,
          ifReadMore: false
        },
        {
          tips: "来自话题: 心理学",
          headimg: "",
          name: "奥莉安娜",
          introduction: "没错，我就是传说中的中路杀神2",
          title: "面试官问你的优点是什么，应该如何回答？",
          sum:
            "可能你们去的都是小企业，我在世界500强面试的时候，可能你们去的都是，我在世界500强面试的时候，经理只问了我两个问题“你是本地的吧？”“寒暑假能来吗？”当然回答可以的时候，紧接着就开始办手续了…",
          content:
            "在我看来，职业选手恐怖的操作有三种：1、手速无敌型  2、临时应变型 3、手速+应变型一、手速无敌型这类操作常见于dota中的卡尔、米波等英雄，我们来看几个小视频。                                                    dendi练习卡尔的操作                                                                  奇迹哥卡尔                                                            Abed绝活米波这几个视频里，第一个dendi练习卡尔，几乎纯粹靠手速，养成肌肉记忆；第二个奇迹哥的卡尔需要一些发挥，但也基本上是切技能，可以看到他技能切得确实太tmd快了；后面米波单杀对手速要求一般，但团战中那个米波向两个方向撒网，然后杀人，这个就比较屌了。2、临时应变型这种操作要非常认真地观察场上局势，可能只是一个谜团大，一个兔子大，一个潮汐大就有可能扭转局势，当然，也需要对手的配合。这个视频中，潮汐和萨尔几乎同时放大，职业选手对机会的把握可见一斑。还有这个经典的TI6shadow帮跳刀跳刀挡箭的镜头，也是神来之笔。在这个之前，还有shadow跳刀意识大杀Moo的镜头。当时moo在白虎大里面，shadow跳过去大，太自信了。3、手速+应变不得不提奇迹卡，可以1V9的存在。这个看过的人都知道，团战打了两分钟，奇迹哥一个人杀了对面两遍，其中不乏手速超快的操作，甚至在团战之余奇迹哥还点了个金，但是最重要的是奇迹哥对局势的判断，对技能的选择和释放，堪称教科书。最后解说也说了，这是Miracle show。不得不吹一下B神，之前许多人都知道这一段，但可能少有看过B神第一视角的。B神在这波团战中，只要是A对方英雄，必定敏捷腿；用技能，必定智力腿；剑圣无敌斩的时候，切了力量腿。看起来平淡无奇，实际上脑子里在疯狂操作。这就是职业选手和普通人的差距吧。",
          zanCount: 0,
          ifZan: false,
          commentCount: 0,
          ifReadMore: false
        },
        {
          tips: "来自话题: 心理学",
          headimg: "",
          name: "奥莉安娜",
          introduction: "没错，我就是传说中的中路杀神2",
          title: "面试官问你的优点是什么，应该如何回答？",
          sum:
            "可能你们去的都是小企业，我在世界500强面试的时候，可能你们去的都是，我在世界500强面试的时候，经理只问了我两个问题“你是本地的吧？”“寒暑假能来吗？”当然回答可以的时候，紧接着就开始办手续了…",
          content:
            "在我看来，职业选手恐怖的操作有三种：1、手速无敌型  2、临时应变型 3、手速+应变型一、手速无敌型这类操作常见于dota中的卡尔、米波等英雄，我们来看几个小视频。                                                    dendi练习卡尔的操作                                                                  奇迹哥卡尔                                                            Abed绝活米波这几个视频里，第一个dendi练习卡尔，几乎纯粹靠手速，养成肌肉记忆；第二个奇迹哥的卡尔需要一些发挥，但也基本上是切技能，可以看到他技能切得确实太tmd快了；后面米波单杀对手速要求一般，但团战中那个米波向两个方向撒网，然后杀人，这个就比较屌了。2、临时应变型这种操作要非常认真地观察场上局势，可能只是一个谜团大，一个兔子大，一个潮汐大就有可能扭转局势，当然，也需要对手的配合。这个视频中，潮汐和萨尔几乎同时放大，职业选手对机会的把握可见一斑。还有这个经典的TI6shadow帮跳刀跳刀挡箭的镜头，也是神来之笔。在这个之前，还有shadow跳刀意识大杀Moo的镜头。当时moo在白虎大里面，shadow跳过去大，太自信了。3、手速+应变不得不提奇迹卡，可以1V9的存在。这个看过的人都知道，团战打了两分钟，奇迹哥一个人杀了对面两遍，其中不乏手速超快的操作，甚至在团战之余奇迹哥还点了个金，但是最重要的是奇迹哥对局势的判断，对技能的选择和释放，堪称教科书。最后解说也说了，这是Miracle show。不得不吹一下B神，之前许多人都知道这一段，但可能少有看过B神第一视角的。B神在这波团战中，只要是A对方英雄，必定敏捷腿；用技能，必定智力腿；剑圣无敌斩的时候，切了力量腿。看起来平淡无奇，实际上脑子里在疯狂操作。这就是职业选手和普通人的差距吧。",
          zanCount: 0,
          ifZan: false,
          commentCount: 0,
          ifReadMore: false
        },
        {
          tips: "来自话题: 心理学",
          headimg: "",
          name: "奥莉安娜",
          introduction: "没错，我就是传说中的中路杀神2",
          title: "面试官问你的优点是什么，应该如何回答？",
          sum:
            "可能你们去的都是小企业，我在世界500强面试的时候，可能你们去的都是，我在世界500强面试的时候，经理只问了我两个问题“你是本地的吧？”“寒暑假能来吗？”当然回答可以的时候，紧接着就开始办手续了…",
          content:
            "在我看来，职业选手恐怖的操作有三种：1、手速无敌型  2、临时应变型 3、手速+应变型一、手速无敌型这类操作常见于dota中的卡尔、米波等英雄，我们来看几个小视频。                                                    dendi练习卡尔的操作                                                                  奇迹哥卡尔                                                            Abed绝活米波这几个视频里，第一个dendi练习卡尔，几乎纯粹靠手速，养成肌肉记忆；第二个奇迹哥的卡尔需要一些发挥，但也基本上是切技能，可以看到他技能切得确实太tmd快了；后面米波单杀对手速要求一般，但团战中那个米波向两个方向撒网，然后杀人，这个就比较屌了。2、临时应变型这种操作要非常认真地观察场上局势，可能只是一个谜团大，一个兔子大，一个潮汐大就有可能扭转局势，当然，也需要对手的配合。这个视频中，潮汐和萨尔几乎同时放大，职业选手对机会的把握可见一斑。还有这个经典的TI6shadow帮跳刀跳刀挡箭的镜头，也是神来之笔。在这个之前，还有shadow跳刀意识大杀Moo的镜头。当时moo在白虎大里面，shadow跳过去大，太自信了。3、手速+应变不得不提奇迹卡，可以1V9的存在。这个看过的人都知道，团战打了两分钟，奇迹哥一个人杀了对面两遍，其中不乏手速超快的操作，甚至在团战之余奇迹哥还点了个金，但是最重要的是奇迹哥对局势的判断，对技能的选择和释放，堪称教科书。最后解说也说了，这是Miracle show。不得不吹一下B神，之前许多人都知道这一段，但可能少有看过B神第一视角的。B神在这波团战中，只要是A对方英雄，必定敏捷腿；用技能，必定智力腿；剑圣无敌斩的时候，切了力量腿。看起来平淡无奇，实际上脑子里在疯狂操作。这就是职业选手和普通人的差距吧。",
          zanCount: 0,
          ifZan: false,
          commentCount: 0,
          ifReadMore: false
        },
        {
          tips: "来自话题: 心理学",
          headimg: "",
          name: "奥莉安娜",
          introduction: "没错，我就是传说中的中路杀神2",
          title: "面试官问你的优点是什么，应该如何回答？",
          sum:
            "可能你们去的都是小企业，我在世界500强面试的时候，可能你们去的都是，我在世界500强面试的时候，经理只问了我两个问题“你是本地的吧？”“寒暑假能来吗？”当然回答可以的时候，紧接着就开始办手续了…",
          content:
            "在我看来，职业选手恐怖的操作有三种：1、手速无敌型  2、临时应变型 3、手速+应变型一、手速无敌型这类操作常见于dota中的卡尔、米波等英雄，我们来看几个小视频。                                                    dendi练习卡尔的操作                                                                  奇迹哥卡尔                                                            Abed绝活米波这几个视频里，第一个dendi练习卡尔，几乎纯粹靠手速，养成肌肉记忆；第二个奇迹哥的卡尔需要一些发挥，但也基本上是切技能，可以看到他技能切得确实太tmd快了；后面米波单杀对手速要求一般，但团战中那个米波向两个方向撒网，然后杀人，这个就比较屌了。2、临时应变型这种操作要非常认真地观察场上局势，可能只是一个谜团大，一个兔子大，一个潮汐大就有可能扭转局势，当然，也需要对手的配合。这个视频中，潮汐和萨尔几乎同时放大，职业选手对机会的把握可见一斑。还有这个经典的TI6shadow帮跳刀跳刀挡箭的镜头，也是神来之笔。在这个之前，还有shadow跳刀意识大杀Moo的镜头。当时moo在白虎大里面，shadow跳过去大，太自信了。3、手速+应变不得不提奇迹卡，可以1V9的存在。这个看过的人都知道，团战打了两分钟，奇迹哥一个人杀了对面两遍，其中不乏手速超快的操作，甚至在团战之余奇迹哥还点了个金，但是最重要的是奇迹哥对局势的判断，对技能的选择和释放，堪称教科书。最后解说也说了，这是Miracle show。不得不吹一下B神，之前许多人都知道这一段，但可能少有看过B神第一视角的。B神在这波团战中，只要是A对方英雄，必定敏捷腿；用技能，必定智力腿；剑圣无敌斩的时候，切了力量腿。看起来平淡无奇，实际上脑子里在疯狂操作。这就是职业选手和普通人的差距吧。",
          zanCount: 0,
          ifZan: false,
          commentCount: 0,
          ifReadMore: false
        }
      ]
    };
  }
};
</script>
<style scoped>
@import "./css/index.css";
.right-row1 {
  float: right;
  position: static;
  width: 280px;
  margin-right: 140px;
  margin-top: -82px;
}
.right-row2 {
  float: right;
  position: static;
  width: 280px;
  margin-right: -280px;
  margin-top: 100px;
}
.col-item {
  padding: 15px;
}
.ico {
  width: 15px;
  height: 15px;
}
.row .col-xs-12:hover {
  background-color: aliceblue;
}
.glyphicon {
  width: 100%;
}
</style>
