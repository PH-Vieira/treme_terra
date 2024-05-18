import router from '@/router'
import { defineStore } from 'pinia'

export const useLoginStore = defineStore('login', {
    state:() => ({
        logged: false,
        admin: false,
        user_id: null,
    }),
    actions: {
        login(user_info) {
            if (user_info.value.user && user_info.value.pass) {
                if (user_info.value.user === 'admin'
                    && user_info.value.pass === 'admin') {
                    this.logged = true
                    this.admin = true
                    this.user_id = 1
                    router.push('documents')
                }
            }
        },
        logout() {
            this.logged = false
            this.admin = false
        },
    },
    getters: {
        is_logged() {
            return this.logged
        },
    },
})