import { useLoginStore } from '@/stores/login/login'
import { useMainStore } from '@/stores/main'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/main_views/HomeView.vue'),
      meta: {
        title: 'Home',
        requires_auth: false,
        accessible: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/main_views/LoginView.vue'),
      meta: {
        title: 'Login',
        requires_auth: false,
        accessible: true,
      },
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('@/views/main_views/CreateView.vue'),
      meta: {
        title: 'Create',
        requires_auth: true,
        accessible: true,
      }
    },
    {
      path: '/documents',
      name: 'documents',
      component: () => import('@/views/main_views/DocumentsView.vue'),
      meta: {
        title: 'My Docs',
        requires_auth: true,
        accessible: true,
      }
    },
    {
      path: '/templates',
      name: 'templates',
      component: () => import('@/views/main_views/TemplatesView.vue'),
      meta: {
        title: 'Templates',
        requires_auth: true,
        accessible: true,
      }
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('@/views/main_views/HelpView.vue'),
      meta: {
        title: 'Help',
        requires_auth: true,
        accessible: true,
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/main_views/ProfileView.vue'),
      meta: {
        title: 'Profile',
        requires_auth: true,
        accessible: true,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/main_views/AboutView.vue'),
      meta: {
        title: 'About',
        requires_auth: false,
        accessible: true,
      }
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test_view.vue'),
      meta: {
        title: 'Test',
        requires_auth: true,
        accessible: true
      },
      beforeEnter: (to, from, next) => {
        const mainStore = useMainStore()
        if (mainStore.DEBUG) {
          to.meta.accessible = true
          next()
        } else {
          next('/')
        }
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  const login_store = useLoginStore()
  if (to.meta.requires_auth) { // se a rota precisa de autenticacao
    if (login_store.is_logged) { // se o usuario estiver logado
      next()
    } else {
      next({ name: 'login' })
    }
  } else {
    next()
  }
})

export default router
