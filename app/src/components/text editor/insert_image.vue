<template>
  <div ref="container" contenteditable="false" class="flex flex-row justify-between min-w-36">
    <button @click="add_image_left" type="button" class="border border-emerald-500 rounded-md p-1 min-w-14 hover:bg-emerald-600 hover:text-white transition-all">left</button>
    <button @click="add_image_center" type="button" class="border border-emerald-500 rounded-md p-1 min-w-14 hover:bg-emerald-600 hover:text-white transition-all">center</button>
    <button @click="add_image_right" type="button" class="border border-emerald-500 rounded-md p-1 min-w-14 hover:bg-emerald-600 hover:text-white transition-all">right</button>
  </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore()

const emit = defineEmits(['insertText'])

const add_image_left = () => {
  console.log(`add image to left`)
  mainStore.remove_toast()
  emit('insertText', '\n@left:\n')
}

const add_image_center = () => {
  console.log(`add image to center`)
  mainStore.remove_toast()
  emit('insertText', '\n@center:\n')
}

const add_image_right = () => {
  console.log(`add image to right`)
  mainStore.remove_toast()
  emit('insertText', '\n@right:\n')
}

// // define ref variables for interacting with template elements //
// const container = ref(null)
// const slide_button = ref(null)
// // ----------------------------------------------------------- //

// // auxiliary variables //
// let button_min = ref(0)  
// let button_max = ref(0)
// let mouseX = ref(0)
// let starting_point = ref(0)
// let middle_of_button = ref(0)
// let following = ref(false)
// // ------------------- //

// const slide = (event) => {
//   if (following.value) {
//     // console.log(event.clientX, slide_button.value.getBoundingClientRect().left)
//     mouseX.value = event.clientX - starting_point.value
//   }
//   // if (following.value) {
//   //   let difference = 0
//   //   if (event.clientX > starting_point.value) {
//   //     difference = (event.clientX - starting_point.value)
//   //     console.log(difference, button_max.value)
//   //     if (difference < button_max.value) {
//   //       mouseX.value = difference
//   //     }
//   //   } else if (event.clientX < starting_point.value) {
//   //     difference = (event.clientX - starting_point.value)
//   //     console.log(difference, button_min.value)
//   //     if (difference >= button_min.value) {
//   //       mouseX.value = (1 - difference)
//   //     }  
//   //   }
//   // }
// }

// const startFollowing = (event) => {
//   console.log(slide_button.value.getBoundingClientRect().x)
//   console.log(event.clientX)

//   // const rect = slide_button.value.getBoundingClientRect()
//   // middle_of_button.value = Math.fround(rect.left + (rect.right - rect.left))
  
//   button_min.value = 1 - (event.clientX - container.value.getBoundingClientRect().left)
//   button_max.value = container.value.getBoundingClientRect().right - container.value.getBoundingClientRect().left - slide_button.value.getBoundingClientRect().width
  
//   following.value = true
//   starting_point.value = event.clientX
  
//   slide_button.value.addEventListener('mousemove', (event) => slide(event))
// }

// const add_image = () => {
//   following.value = false
// }

// const stopFollowing = () => {
//   following.value = false
// }
</script>