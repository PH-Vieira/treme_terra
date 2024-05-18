import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useNavbarStore = defineStore('navbar', {
  state: () => ({
    routes: []
  }),
  actions: {
    fetchRoutes() {
      const router = useRouter()
      this.routes = router.getRoutes().map(route => ({
        path: route.path,
        name: route.name,
        meta: route.meta
      }))
    },
    isRouteAccessible(routeName) {
      const route = this.routes.find(r => r.name === routeName)
      return route ? !route.meta.requiresAuth : false
    },
  }
})