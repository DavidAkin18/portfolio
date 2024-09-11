import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Portfolio from '@/views/Portfolio.vue'
import Skills from '@/views/Skills.vue'
import CurriculumVitae from '@/views/CurriculumVitae.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path:'/portfolio',
    name:'portfolio',
    component : Portfolio
  },
  {
    path:'/skills',
    name:'skills',
    component:Skills
  },
  {
    path:'/curriculumVitae',
    name:'curriculumVitae',
    component:CurriculumVitae
  },
  {
    path:'/contact',
    name:'contact',
    component:Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
