import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '@/components/SignUp.vue'
import SignIn from '@/components/SignIn.vue'
import WelcomePage from '@/components/WelcomePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/HelloWorld'
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/welcomepage',
    name: 'WelcomePage',
    component: WelcomePage,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// Navigation guard to check for authentication
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if user is authenticated
    if (!localStorage.getItem('token')) {
      // If not authenticated, redirect to signin page
      next({ name: 'SignIn' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router