import { createRouter, createWebHistory } from 'vue-router'


const router: any = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Root.vue'),
      children: [
        {
          path: 'message',
          name: 'message',
          component: () => import('@/views/message/index.vue'),
          meta: {
            menu: 'message',
            keepAlive: true,
          }
        }
      ]
    },
  ]
})

export default router