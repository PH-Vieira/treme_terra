<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useMainStore } from './stores/main';
import { computed, onMounted, ref, watch } from 'vue';
import { useLoginStore } from './stores/login/login';

onMounted(() => {
  mainStore.set_debug_status(true)
})

const hamburger_toggle = ref(false)
const mainStore = useMainStore()
const login_store = useLoginStore()
const router = useRouter()
const routes = router.getRoutes().filter(route => route.meta.accessible)

const filtered_routes = computed(() => {
  if (login_store.is_logged) {
    return routes.filter(route => route.name !== 'login')
  }
  else return routes.filter(route => !route.meta.requires_auth)
})
</script>

<template>
  <div class="
    sm:flex
    sm:flex-col
    
    flex
    flex-row
    transition-all">
    <nav class="
      sm:static
      sm:flex
      sm:flex-row
      sm:h-9
      sm:justify-center
      sm:translate-x-0

      
      custom_transition
      fixed
      justify-start
      bg-emerald-500
      h-screen
      min-w-44
      max-w-full
      overflow-hidden
      shadow-xl"
      :class="{ 'translate-x-neg-120px': !hamburger_toggle }">
      <div class="
        sm:flex-row
        flex-col
        flex">
        <div class="
          sm:hidden
          bg-none
          h-16
          w-16
          ml-auto
          cross
          menu">
          <label>
            <input type="checkbox" v-model="hamburger_toggle" class="hidden">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="30" fill="#059669" />
              <path class="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
              <path class="line--2" d="M0 50h99" />
              <path class="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
            </svg>
          </label>
        </div>
        <div class="
            sm:hidden
            flex
            w-full
            h-1
            border-t
            border-emerald-700">
        </div>
        <RouterLink v-for="route in filtered_routes" :key="route.name" :to="route.path" class="
            sm:my-auto

            ml-2
            mr-auto
            my-2
            px-1
            border
            border-none
            rounded
            custom-transition
            bg-emerald-600
            text-dark-gray-50
            shadow-lg
            focus:outline-none
            focus:ring-2
            focus:ring-emerald-700" active-class="
            bg-mustard-yellow-500
            text-dark-gray-900" aria-label="Navegar para {{ route.meta.title || route.name }}">
          {{ route.meta.title || route.name }}
        </RouterLink>
      </div>
    </nav>

    <RouterView class="
      sm:m-0
      ml-14
      border-2
      border-gray-950
      fill_available
      router_view
      overflow-auto" />
  </div>
</template>

<style scoped>
path {
  fill: none;
  stroke: #ffffff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  --length: 24;
  --offset: -38;
  stroke-dasharray: var(--length) var(--total-length);
  stroke-dashoffset: var(--offset);
  transition: all .8s cubic-bezier(.645, .045, .355, 1);
}

.cross input:checked+svg {

  .line--1,
  .line--3 {
    --length: 22.627416998;
  }

  .line--2 {
    --length: 0;
  }
}

.menu {

  .line--1,
  .line--3 {
    --total-length: 111.22813415527344;
    --offset: -50.22813415527344;
  }

  .line--2 {
    --total-length: 99;
  }

  input:checked+svg {
    path {
      transform: translateX(30px);
    }

    .line--1,
    .line--3 {
      --offset: -16.9705627485;
    }

    .line--2 {
      --offset: -20;
    }
  }
}
</style>
