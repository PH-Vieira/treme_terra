<template>
  <div ref="container" contenteditable="false" class="flex flex-row justify-between min-w-36">
    <button @click="add_image_left" type="button" class="border border-emerald-500 rounded-md p-1 min-w-14 hover:bg-emerald-600 hover:text-white transition-all">left</button>
    <button @click="add_image_center" type="button" class="border border-emerald-500 rounded-md p-1 min-w-14 hover:bg-emerald-600 hover:text-white transition-all">center</button>
    <button @click="add_image_right" type="button" class="border border-emerald-500 rounded-md p-1 min-w-14 hover:bg-emerald-600 hover:text-white transition-all">right</button>
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

const add_image_left = () => {
  console.log(`add image to left`)
  mainStore.remove_toast()
  emit('insertText', `left:${selected_image.value}`)
}

const add_image_center = () => {
  console.log(`add image to center`)
  mainStore.remove_toast()
  emit('insertText', `center:${selected_image.value}`)
}

const add_image_right = () => {
  console.log(`add image to right`)
  mainStore.remove_toast()
  emit('insertText', `right:${selected_image.value}`)
}
</script>