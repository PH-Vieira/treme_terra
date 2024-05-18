<template>
  <div class="flex flex-col items-center border border-gray-950 rounded-md p-1">
    <div>
      <button @click="insert_image_button" class="m-1 p-1 border border-gray-950 rounded-md" type="button">Imagem</button>
    </div>
    <div @keyup="update_content" contenteditable="true" ref="content" class="min-w-80 min-h-40 text-center border border-emerald-700 rounded-md">
      
    </div>
    {{ mainStore.get_document_text }}
  </div>
</template>

<script setup>
import { onMounted, ref, h } from 'vue';
import insert_image from '@/components/text editor/insert_image.vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useMainStore } from '@/stores/main';

const mainStore = useMainStore()
const toastId = ref('')

let content = ref(null)

onMounted(() => {
  mainStore.set_content_ref(content)
})

let content_text = ref('')

const update_content = () => {
  // console.log(content.value.textContent)
}

const handle_insert_text = (text) => {
  if (content.value) {
    const span = document.createElement('span');
    span.textContent = text;
    span.className = 'border border-gray-950 rounded-md px-1'
    span.contentEditable = false
    content.value.appendChild(span);
  }
}

const insert_image_button = () => {
  toast.clearAll();
  toastId.value = toast(
    {
      render() {
        return h(insert_image, {
          onInsertText: handle_insert_text,
        });
      },
    },
    {
      autoClose: false,
      position: 'top-center',
      theme: 'dark',
      closeOnClick: false,
      transition: 'slide',
    }
  );
  mainStore.set_toast_id(toastId.value);
}
</script>

<style scoped></style>