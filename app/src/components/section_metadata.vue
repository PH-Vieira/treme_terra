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
                v-for="item, index in input_list"
                :key="index"
                :placeholder="item"
                v-model="input_list_model[item]">
        </div>
    </div>
</template>

<script setup>
import { useMainStore } from '@/stores/main';
import { ref, watch } from 'vue';

const mainStore = useMainStore()
const input_list = mainStore.get_metadata_input_list
const input_list_model = ref({})

watch(input_list_model, (new_val) => {
    mainStore.set_metadata_input_model(new_val)
}, { deep: true })
</script>