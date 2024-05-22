<template>
  <div class="p-1 w-full">
    <div>
      <button @click="insert_image_button" class="my-1 px-2 py-1 border border-emerald-700 bg-emerald-500 rounded-md text-white"
        type="button">Adicionar imagem</button>
    </div>
    <div
      @keyup="update_content"
      @paste.prevent="(event) => handle_paste_content(event)"
      contenteditable="true" ref="content"
      class="
        h-full min-h-44
        w-full
        text-center
        border border-emerald-700 rounded-md
        bg-white
        overflow-y-auto">

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, h } from 'vue';
import insert_image from '@/components/text editor/insert_image.vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useMainStore } from '@/stores/main';
import { useLoginStore } from '@/stores/login/login';

const mainStore = useMainStore()
const loginStore = useLoginStore()
const toastId = ref('')

let content = ref(null)

const handle_paste_content = (event) => {
  const paste = (event.clipboardData).getData("text")
  const selection = window.getSelection()
  if (!selection.rangeCount) return
  selection.deleteFromDocument()
  selection.getRangeAt(0).insertNode(document.createTextNode(paste))
  selection.collapseToEnd()
}

onMounted(() => {
  mainStore.set_content_ref(content)
})

const handle_insert_image = (text) => {
  if (content.value) {
    const text_content = text.split(':')[1].slice(0, -1)

    const empty_div = document.createElement('div')
    empty_div.contentEditable = true
    empty_div.innerHTML = '<br>'
    empty_div.className = 'mt-2'

    const div = document.createElement('div')
    div.contentEditable = false
    div.className = 'flex items-center space-x-2 border border-gray-950 rounded-md w-fit mx-1 border border-gray-950 rounded-md w-fit mx-auto'

    const span = document.createElement('span')
    span.textContent = text_content
    span.className = 'px-1'

    const img = document.createElement('img')
    img.className = 'max-w-36 max-h-36 rounded-sm'
    const img_name = text_content
    const src = mainStore.get_image_by_name(img_name, loginStore.user_id)
    img.src = src

    div.appendChild(img)
    div.appendChild(span)

    const selection = window.getSelection()
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      const common_ancestor_container = range.commonAncestorContainer

      if (content.value.contains(common_ancestor_container)) {
        if (is_cursor_at_end(content.value)) {
          content.value.appendChild(div)
          content.value.appendChild(empty_div)
          empty_div.focus()
        } else {
          range.deleteContents()
          range.insertNode(div)
          range.collapse(false)
        }
      } else {
        content.value.appendChild(div)
        content.value.appendChild(empty_div)
        empty_div.focus()
      }
    } else {
      content.value.appendChild(div)
      content.value.appendChild(empty_div)
      empty_div.focus()
    }
    content.value.focus()
  }
}

const insert_image_button = () => {
  toast.clearAll();
  toastId.value = toast(
    {
      render() {
        return h(insert_image, {
          onInsertImage: handle_insert_image,
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

const is_cursor_at_end = (element) => {
  const selection = window.getSelection()
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0)
    const end_container = range.endContainer
    const end_offset = range.endOffset

    if (end_container === element) {
      return end_offset === element.textContent.length
    }

    if (element.contains(end_container) && element.lastChild === end_container) {
      return end_offset === end_container.textContent.length
    }
  }
  return false
}
</script>

<style scoped></style>