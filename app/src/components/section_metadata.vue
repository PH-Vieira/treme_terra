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
                v-for="(item, index) in input_list"
                :key="index"
                :placeholder="item.name"
                v-model="input_list[index].value">
        </div>
        {{ input_list }}
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';

let input_list = ref([
    { name: 'Autor', value: '' },
    { name: 'Titulo', value: '' },
    { name: 'Orientador', value: '' },
    { name: 'Coorientador', value: '' },
    { name: 'Data', value: '' },
    { name: 'Cidade', value: '' },
    { name: 'Faculdade', value: '' },
])

watch(input_list.value, (newVal, oldVal) => {
    console.log(newVal)
})
</script>