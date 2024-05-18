<template>
  <div id="referencias" class=" flex flex-col items-center py-4">
    <!-- Lista de todas as fontes bibliograficas citadas no trabalho, seguindo um formato de acordo com as normas da instituicao ou da area de estudo ( ABNT, APA, MLA ) -->
    <div @click.prevent="toggle_div" class="toggler cursor-pointer bg-dark-gray-200 rounded-lg px-6 py-2 w-3/4 min-h-16 mt-6 flex justify-center">
      <button class="flex flex-row items-center justify-center w-full">
        <div class="toggler-icon mx-2 rotation-transition" :style="[ referencias_div ? 'rotate: 180deg' : '' ]"><img class="w-8 h-8" src="@/assets/caret-down-fill.svg" alt=""></div>
        <div class="toggle-title mx-2 w-full text-4xl">Referências</div>
      </button>
    </div>
    <div id="resumo-blocks" class="bg-dark-gray-300 w-8/12 rounded-b-lg flex height-transition h-80 overflow-hidden" :class="{ 'hidden-block': referencias_div }">
      <div class="w-full h-full flex justify-center items-center">
        <textarea v-model="referencias_content" class="w-11/12 h-5/6 opacity-transition opacity-100 resize-none" :style="[ referencias_div ? 'opacity: 0;' : '' ]" name="" id="" cols="30" rows="10"></textarea>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let referencias_content = ref('')

let referencias_div = ref(true)

function toggle_div() {
  referencias_div.value = !referencias_div.value
}
</script>

<style>

</style>