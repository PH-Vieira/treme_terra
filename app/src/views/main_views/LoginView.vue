<template>
    <div class="flex justify-center items-center">
        <form @submit.prevent="submit" class="flex flex-col border border-emerald-700 rounded-md w-2/6 h-2/3 p-2">
            <input v-model="user_info.user" placeholder="Usuario"ype="text" class="border border-emerald-400 focus:outline-mustard-yellow-500 rounded p-1 mx-10 my-1">
            <input v-model="user_info.pass" placeholder="Senha" type="password" class="border border-emerald-400 focus:outline-mustard-yellow-500 rounded p-1 mx-10 my-1">
            <button type="submit" class="border border-emerald-400 m-auto px-2 py-1 rounded active:bg-emerald-500 transition-colors">Entrar</button>  
        </form>
    </div>
</template>

<script setup>
import { useLoginStore } from '@/stores/login/login';
import { ref } from 'vue';
const login_store = useLoginStore()

let user_info = ref({
    user: '',
    pass: '',
})
const submit = () => {
    console.log(`submitting..`);
    login_store.login(user_info)
}
</script>