<template>
  <div ref="container" contenteditable="false" class="flex flex-row justify-between min-w-36">
    <button ref="button" @click="add_image" type="button" class="border border-emerald-500 rounded-md p-1 min-w-14 hover:bg-emerald-600 hover:text-white transition-all">Inserir</button>
    <select v-model="selected_image" class="bg-emerald-400 text-black" required>
      <option value="" selected hidden>Selecione uma imagem</option>
      <option v-for="image in user_images" :key="image.name" :value="image.name">
      {{ image.name }}</option>
    </select>
  </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/login/login';
import { useMainStore } from '@/stores/main';
import { computed, ref } from 'vue';

const mainStore = useMainStore()
const loginStore = useLoginStore()
const selected_image = ref('')
// const container = ref(null)
const button = ref(null)

const user_images = computed(() => {
  return mainStore.get_images_by_user(loginStore.user_id)
})

const emit = defineEmits(['insertText'])

const add_image = () => {
  if (selected_image.value !== '') {
    mainStore.remove_toast()
    emit('insertText', `img:${selected_image.value}`)
  } else {
    button.value.classList.replace('border-emerald-500', 'border-red-500')
  }
}
</script>