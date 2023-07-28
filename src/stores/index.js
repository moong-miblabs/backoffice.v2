import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('store', () => {
    // State
    const Id = ref(0)

    // Getters
    const getId = computed(() => Id.value)

    // Actions
    function setId(payload) {
        Id.value = payload
    }

    return {
        Id, getId, setId
    }
})
