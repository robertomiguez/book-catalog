import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: `/`,
    name: `Landing`,
    component: () =>
      import(`../views/Landing.vue`)
  },
  {
    path: `/about`,
    name: `About`,
    component: () =>
      import(`../views/About.vue`)
  },
  {
    path: `/book`,
    name: `Book`,
    component: () => import(`../views/Book.vue`)
  },
  {
    path: `/author`,
    name: `Author`,
    component: () => import(`../views/Author.vue`)
  }
]

const router = new VueRouter({
  mode: `history`,
  base: process.env.BASE_URL,
  routes
})

export default router
