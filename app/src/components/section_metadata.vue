<template>
    <div class="
        flex flex-col
        border-2 border-emerald-700 rounded-md
        bg-emerald-100
        m-4
        text-center items-center justify-center">
        <strong class="my-1">Dados principais</strong>

        <div class="
            flex justify-center flex-wrap">
            <input class="
                border border-emerald-700 rounded-md
                m-1 p-1"
                type="text"
                v-for="(value, key) in Object.entries(input_list)"
                :key="key"
                v-model="input_list[value]"
                :placeholder="String(value).split(',')[0]">
        </div>
        {{ input_list }}
    </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';
import { computed, watch } from 'vue';

const mainStore = useMainStore()

let input_list = computed(() => mainStore.metadata_input_list)

watch(input_list, (newList) => {
    console.log(newList)
    mainStore.set_metadata_input_list(newList)
}, { deep: true })
</script>