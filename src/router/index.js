import Vue from "vue";
import Router from "vue-router";
import index from "../pages/index.vue";
import pageEditor from "../pages/pageEditor.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      component: index
    },
    {
      path: "/editor",
      name: "editor",
      component: pageEditor
    }
  ]
});
