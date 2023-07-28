import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
    // State
    const Id = ref(0)
    const token = ref(0)

    // Getters
    const getId = computed(() => Id.value)
    const getToken = computed(() => token.value)

    // Actions
    function setId(payload) { Id.value = payload }
    function setToken(payload) { token.value = payload }

    // Reset
    function $reset(){
        Id.value = null
        token.value = null
    }

    return {
        Id, getId, setId,
        token, getToken, setToken,
        $reset
    }
})
