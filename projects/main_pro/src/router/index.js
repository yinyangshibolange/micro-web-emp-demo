import VueRouter from 'vue-router'

const router = new VueRouter({
 routes: [{
  name: "main_pro",
  path: "/",
  component: () => import("../Layout.vue"),
  // children: [{
  //  name: "app",
  //  path: "app",
  //  component: () => import('@v2b/App'),
  // }, {
  //  name: "app1",
  //  path: "app1",
  //  component: () => import('@v2b1/App')
  // }]
 }]
})

export default router