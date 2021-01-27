
import { createRouter, createWebHistory } from "vue-router";
import Page01 from './views/Page01.vue'
import Page02 from './views/Page02.vue'
import Page03 from './views/Page03.vue'
import Page04 from './views/Page04.vue'
import Page05 from './views/Page05.vue'
import HomePage from './views/HomePage.vue'

const routes = [
   {
      component: HomePage,
      path: '/'
   },
   {
      component: Page01,
      path: '/healty-card'
   },
   {
      component: Page02,
      path: '/food-card'
   },
   {
      component: Page03,
      path: '/property-card'
   },
   {
      component: Page04,
      path: '/animal-card'
   },
   {
      component: Page05,
      path: '/drink-card'
   },
]

export default createRouter({
   history: createWebHistory(),
   routes: routes
})
