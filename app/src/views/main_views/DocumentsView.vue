<template>
    <div class="flex flex-col items-center justify-center">
        Documents
        <div class="flex flex-row">
            <div class="border border-emerald-600 rounded-md px-1 mx-1 text-center">
                <h3>Images</h3>
                <input ref="input_file" type="file" accept="image/*" @change="preview_image" class="hidden">
                <input type="button" value="Inserir imagem" @click="input_file.click()" class="border border-emerald-600 bg-emerald-600 text-white cursor-pointer hover:bg-mustard-yellow-700 hover:border-mustard-yellow-500 hover:text-black transition-all rounded-md px-2 m-1">
                <div v-for="(image, index) in user_images" :key="index" class="border border-emerald-800 rounded m-1">
                    <img :src="image.data" alt="user_image" class="max-w-36 max-h-36 rounded-sm">
                    <p>{{ image.name }}</p>    
                </div>
            </div>
            <div class="border border-emerald-600 rounded-md px-1 mx-1 text-center">
                <h3>Papeis</h3>
                <div v-for="item, index in Object.entries(mainStore.get_metadata_input_model)" :key="item.id">
                    {{ item[0] }}: {{ item[1] }}
                </div>
            </div>
            <div class="border border-emerald-600 rounded-md px-1 mx-1">
                <h3>Miscelaneous</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/login/login';
import { useMainStore } from '@/stores/main';
import { computed, onBeforeUnmount, ref } from 'vue';

const mainStore = useMainStore()
const loginStore = useLoginStore()

const input_file = ref(null)

let user_images = computed(() => {
    return mainStore.get_images_by_user(loginStore.user_id)
})

const preview_image = (event) => {
    const file = event.target.files[0]
    if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
            const image_data = e.target.result
            const image_name = file.name.replace(/\.[^/.]+$/, "")
            mainStore.add_image(loginStore.user_id, image_data, image_name)
        }
        reader.readAsDataURL(file)
    }
}

onBeforeUnmount(() => {
    mainStore.kill_temp_image()
})
</script>

<style></style>