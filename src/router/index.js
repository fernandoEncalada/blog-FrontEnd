import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

import publicationRouter from '../modules/publications/router'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/publications',
  //   ...publicationRouter
  // }
  {
    path: '/',
    ...publicationRouter
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
