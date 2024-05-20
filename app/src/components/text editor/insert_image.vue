<template>
  <div ref="container" contenteditable="false" class="flex flex-row justify-between min-w-36">
    <button @click="add_image" type="button" class="border border-emerald-500 rounded-md p-1 min-w-14 hover:bg-emerald-600 hover:text-white transition-all">Inserir</button>
    <select v-model="selected_image">
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

const user_images = computed(() => {
  return mainStore.get_images_by_user(loginStore.user_id)
})

const emit = defineEmits(['insertText'])

const add_image = () => {
  console.log(`add image to center`)
  mainStore.remove_toast()
  emit('insertText', `img:${selected_image.value}`)
}
</script>