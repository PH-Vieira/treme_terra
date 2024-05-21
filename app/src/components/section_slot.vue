<template>
    <div class="
        flex flex-col
        border-2 border-emerald-700 rounded-md
        bg-emerald-100
        m-4
        text-center items-center justify-center">
        <strong class="my-1">{{ section_name }}</strong>

        <text_widget />

        <slot></slot>
    </div>
</template>

<script setup>
import text_widget from './text editor/text_widget.vue';

const props = defineProps(['section_name'])
</script>