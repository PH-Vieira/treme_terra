<template>
    <div id="resumo" class=" flex flex-col items-center py-4">
        <!-- Breve resumo do trabalho, destacando os objetivos, metodologia, principais resultados e conclusoes. Pode incluir palavras chave -->
        <div @click.prevent="toggle_div" class="toggler cursor-pointer bg-dark-gray-200 rounded-lg px-6 py-2 w-3/4 min-h-16 mt-6 flex justify-center">
          <button class="flex flex-row items-center justify-center w-full">
            <div class="toggler-icon mx-2 rotation-transition" :style="[ resumo_div ? 'rotate: 180deg' : '' ]"><img class="w-8 h-8" src="@/assets/caret-down-fill.svg" alt=""></div>
            <div class="toggle-title mx-2 w-full text-4xl">Resumo</div>
          </button>
        </div>
        <div id="resumo-blocks" class="bg-dark-gray-300 w-8/12 rounded-b-lg flex height-transition h-80 overflow-hidden" :class="{ 'hidden-block': resumo_div }">
          <div class="w-full h-full flex justify-center items-center">
            <textarea v-model="resumo_content" @input="handleTextArea" class="w-11/12 h-5/6 opacity-transition opacity-100 resize-none" :style="[ resumo_div ? 'opacity: 0;' : '' ]" name="" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
      </div>
</template>
  
<script setup>
import { ref } from 'vue'

let resumo_content = ref('')

let resumo_div = ref(true)

function handleTextArea(e) {
  console.log(resumo_content.value)
  const cursorPosition = e.target.selectionStart
  if (cursorPosition > 0 && resumo_content.value[cursorPosition - 1] === '@') {
    if (cursorPosition === 1 || !/\w/.test(resumo_content.value[cursorPosition - 2])) {
      console.log('Detected "@" at the beginning or without a preceding letter');
      // Adicione aqui a lógica para lidar com o "@" isolado
    }
  }
}

function toggle_div() {
  resumo_div.value = !resumo_div.value
}
</script>
  
<style>
  
</style>