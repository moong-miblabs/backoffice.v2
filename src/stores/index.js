import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
    // State
    const flash = ref(0)
    const Id = ref(0)
    const token = ref(0)
    const nama = ref(0)

    // Getters
    const getFlash = computed(() => flash.value)
    const getId = computed(() => Id.value)
    const getToken = computed(() => token.value)
    const getNama = computed(() => nama.value)

    // Actions
    function setFlash(payload) { flash.value = payload }
    function setId(payload) { Id.value = payload }
    function setToken(payload) { token.value = payload }
    function setNama(payload) { nama.value = payload }

    // Reset
    function $reset(){
        Id.value = null
        token.value = null
        flash.value = null
        token.value = null
        nama.value = null
    }

    return {
        flash, getFlash, setFlash,
        Id, getId, setId,
        token, getToken, setToken,
        nama, getNama, setNama,
        $reset
    }
},{
    persist: true
})
