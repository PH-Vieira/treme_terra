<template>
  <div class="flex flex-col items-center border border-gray-950 rounded-md p-1">
    <div>
      <button @click="insert_image_button" class="m-1 p-1 border border-gray-950 rounded-md"
        type="button">Imagem</button>
    </div>
    <div @keyup="update_content" contenteditable="true" ref="content"
      class="min-w-80 min-h-40 text-center border border-emerald-700 rounded-md">

    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, h, computed } from 'vue';
import insert_image from '@/components/text editor/insert_image.vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import { useMainStore } from '@/stores/main';
import { useLoginStore } from '@/stores/login/login';

const mainStore = useMainStore()
const loginStore = useLoginStore()
const toastId = ref('')

let content = ref(null)

onMounted(() => {
  mainStore.set_content_ref(content)
})

const handle_insert_text = (text) => {
  if (content.value) {
    const text_align = text.split(':')[0]
    const text_content = text.split(':')[1]

    const empty_div = document.createElement('div')
    empty_div.contentEditable = true
    empty_div.innerHTML = '<br>'
    empty_div.className = 'mt-2'

    const div = document.createElement('div')
    div.contentEditable = false
    div.className = 'flex items-center space-x-2 border border-gray-950 rounded-md w-fit'
    switch (text_align) {
      case 'left':
        div.style.marginRight = 'auto'
        break
      case 'center':
        div.style.marginLeft = 'auto'
        div.style.marginRight = 'auto'
        break
      case 'right':
        div.style.marginLeft = 'auto'
        break
      default:
        div.className = 'border border-gray-950 rounded-md w-fit'
    }

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