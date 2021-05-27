import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stu',
    name: 'Student',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Stu.vue'),
    children: [
      {
        path: '/stuInfo',
        name: 'stuInfo',
        component: () => import(/* webpackChunkName: "about" */ '../student/router/stuInfo.vue')
      },
      {
        path: '/stuInfo2',
        name: 'stuInfo2',
        component: () => import(/* webpackChunkName: "about" */ '../student/router/stuInfo2.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
