import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import QuizView from './views/QuizView.vue'

import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/quiz/:id',
      name: 'Quiz',
      component: QuizView
    }
  ]
})
app.use(router)
app.mount('#app')
