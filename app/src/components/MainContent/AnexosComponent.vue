<template>
  <div id="anexos" class=" flex flex-col items-center py-4">
    <!-- Documentos que complementam o trabalho, como leis, regulamentos, mapas, entre outros -->
    <div @click.prevent="toggle_div" class="toggler cursor-pointer bg-dark-gray-200 rounded-lg px-6 py-2 w-3/4 min-h-16 mt-6 flex justify-center">
      <button class="flex flex-row items-center justify-center w-full">
        <div class="toggler-icon mx-2 rotation-transition" :style="[ anexos_div ? 'rotate: 180deg' : '' ]"><img class="w-8 h-8" src="@/assets/caret-down-fill.svg" alt=""></div>
        <div class="toggle-title mx-2 w-full text-4xl">Anexos</div>
      </button>
    </div>
    <div id="resumo-blocks" class="bg-dark-gray-300 w-8/12 rounded-b-lg flex height-transition h-80 overflow-hidden" :class="{ 'hidden-block': anexos_div }">
      <div class="w-full h-full flex justify-center items-center">
        <textarea v-model="anexos_content" class="w-11/12 h-5/6 opacity-transition opacity-100 resize-none" :style="[ anexos_div ? 'opacity: 0;' : '' ]" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let anexos_content = ref('')

let anexos_div = ref(true)

function toggle_div() {
  anexos_div.value = !anexos_div.value
}
</script>

<style>

</style>