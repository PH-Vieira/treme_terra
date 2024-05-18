<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useMainStore } from './stores/main';
import { computed, onMounted, watch } from 'vue';
import { useLoginStore } from './stores/login/login';

onMounted(() => {
  mainStore.set_debug_status(true)
})

const mainStore = useMainStore()
const login_store = useLoginStore()
const router = useRouter()
const routes = router.getRoutes().filter(route => route.meta.accessible)

let filtered_routes = computed(() => {
  if (login_store.is_logged) {
    return routes.filter(route => route.name !== 'login')
  }
  else return routes.filter(route => !route.meta.requires_auth)
})
</script>

<template>
  <div class="flex flex-col">
    <nav class="flex justify-center bg-emerald-500 h-9 shadow-xl">
      <RouterLink
      v-for="route in filtered_routes"
      :key="route.name"
      :to="route.path"
      class="mx-4 my-auto px-1 border border-none rounded transition-colors bg-emerald-600 text-dark-gray-50 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-700"
      active-class="bg-mustard-yellow-500 text-dark-gray-900"
      aria-label="Navegar para {{ route.meta.title || route.name }}">
      {{ route.meta.title || route.name }}
      </RouterLink>
    </nav>
    <RouterView class="routerView overflow-auto"/>
  </div>
</template>

<style>
.routerView {
  min-height: calc(100vh - 36px);
}
.height-transition {
  transition: height 0.9s cubic-bezier(0.55, 0, 0.35, 0.95) 0s;
}
.rotation-transition {
  transition: rotate .3s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}
.opacity-transition {
  transition: opacity 1s cubic-bezier(0.85, 0, 0.15, 1) 0s;
}
</style>
