<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
    <RouterView name="Header"/>
    <RouterView name="Sidebar"/>
    <RouterView/>
    <RouterView name="Footer"/>
</template>