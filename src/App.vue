<script setup>
import * as CONSTANT from '@/constant'
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'

const appTitle = ref(CONSTANT.appTitle)
const appIcon = ref(CONSTANT.appIcon)

onMounted(()=>{
    document.title = appTitle.value;
    var favicon = document.querySelector("link[rel~='icon']");
    favicon.href = appIcon.value;
})
</script>

<template>
    <RouterView name="Header"/>
    <RouterView name="Sidebar"/>
    <RouterView/>
    <RouterView name="Footer"/>
</template>