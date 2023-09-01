import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const CategoryPost = () => import('../views/CategoryPost.vue')
const PostDetails = () => import('../views/PostDetails.vue')
const NotFound = () => import('../views/NotFound.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/category/:id',
      name: 'category',
      component: CategoryPost,
      props: true
    },
    {
      path: '/postDetails/:id',
      name: 'postDetails',
      component: PostDetails,
      props: true
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
