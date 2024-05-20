<template>
    <div class="flex justify-center items-center">
        <form @submit.prevent="submit" class="
            2xl:border-red-500
            2xl:max-w-80
            xl:border-mustard-yellow-500
            xl:max-w-72
            lg:border-green-500
            lg:max-w-64
            md:border-sky-500
            md:max-w-56
            sm:border-purple-500
            sm:max-w-48
            sm:h-2/3

            transition-all
            max-w-44
            min-w-40
            flex
            flex-col
            border
            border-emerald-700
            rounded-md
            w-40
            h-40
            p-2">
            <input v-model="user_info.user" placeholder="Usuario" ype="text" class="
                border
                border-emerald-400
                focus:outline-mustard-yellow-500
                rounded
                p-1
                mx-2
                my-1"
                ref="input_username">
            <input v-model="user_info.pass" placeholder="Senha" type="password" class="
                border
                border-emerald-400
                focus:outline-mustard-yellow-500
                rounded
                p-1
                mx-2
                my-1">
            <button type="submit" class="
                border
                border-emerald-400
                m-auto
                px-2
                py-1
                rounded
                active:bg-emerald-500
                transition-colors">
                Entrar
            </button>
        </form>
    </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/login/login';
import { onMounted, ref } from 'vue';
const login_store = useLoginStore()
const input_username = ref(null)

onMounted(() => {
    input_username.value.focus()
})

let user_info = ref({
    user: '',
    pass: '',
})
const submit = () => {
    console.log(`submitting..`);
    login_store.login(user_info)
}
</script>