import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HelloWorld,
    props: { msg: 'Vite + Vue' }
  },
  // ここに他のルートを追加できます
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
