import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignIn from '../components/SigninPage.vue'
import Register from '../components/RegisterPage.vue'
import PaddyBlogs from '../components/PaddyBlogs.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lo',
    name: 'signin',
    component: SignIn
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: PaddyBlogs
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
