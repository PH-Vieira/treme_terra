<template>
    <div class="flex flex-col items-center justify-center">
        Documents
        <div class="flex flex-row">
            <div class="border border-emerald-600 rounded-md px-1 mx-1">
                <h3>Images</h3>
                <input type="file" accept="image/*" @change="preview_image">
                <img :src="preview_src" alt="" class="max-w-36 max-h-36 m-1 rounded-sm">
                {{ preview_src }}
            </div>
            <div class="border border-emerald-600 rounded-md px-1 mx-1">
                <h3>Miscelaneous</h3>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';
import { computed, onBeforeUnmount, ref } from 'vue';

const mainStore = useMainStore()

let preview_src = computed(() => {
    return mainStore.temporary_image_url
})

const preview_image = (event) => {
    const file = event.target.files[0]
    if (file) {
        mainStore.set_temp_image(file)
    } else {
        mainStore.kill_temp_image()
    }
}

onBeforeUnmount(() => {
    mainStore.kill_temp_image()
})
</script>

<style></style>