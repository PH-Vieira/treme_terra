<template>
  <div id="sumario" class=" flex flex-col items-center py-4">
    <!-- Lista de capitulos, secoes e subsecoes do trabalho, indicando suas respectivas paginas -->
    <div @click.prevent="toggle_div" class="toggler cursor-pointer bg-dark-gray-200 rounded-lg px-6 py-2 w-3/4 min-h-16 mt-6 flex justify-center">
      <button class="flex flex-row items-center justify-center w-full">
        <div class="toggler-icon mx-2 rotation-transition" :style="[ sumario_div ? 'rotate: 180deg' : '' ]"><img class="w-8 h-8" src="@/assets/caret-down-fill.svg" alt=""></div>
        <div class="toggle-title mx-2 w-full text-4xl">Sumário</div>
      </button>
    </div>
    <div id="resumo-blocks" class="bg-dark-gray-300 w-8/12 rounded-b-lg flex height-transition h-80 overflow-hidden" :class="{ 'hidden-block': sumario_div }">
      <div class="w-full h-full flex justify-center items-center">
        <textarea v-model="sumario_content" class="w-11/12 h-5/6 opacity-transition opacity-100 resize-none" :style="[ sumario_div ? 'opacity: 0;' : '' ]" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let sumario_content = ref('')

let sumario_div = ref(true)

function toggle_div() {
  sumario_div.value = !sumario_div.value
}
</script>

<style>

</style>