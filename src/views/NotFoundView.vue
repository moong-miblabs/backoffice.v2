<script setup>
import * as CONSTANT from '@/constant'
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useStore } from '@/stores/index'

const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

const appBy  	= ref(CONSTANT.appBy)
const appByLink = ref(CONSTANT.appByLink)
</script>

<template>
    <main>
        <div class="container">
            <section class="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                <h1>404</h1>
                <h2>The page you are looking for doesn't exist.</h2>
                <RouterLink class="btn" :to="{ name : 'home' }">Back to home</RouterLink>
                <img src="/assets/img/not-found.svg" class="img-fluid py-5" alt="Page Not Found">
                <div class="credits">
                    <!-- All the links in the footer should remain intact. -->
                    <!-- You can delete the links only if you purchased the pro version. -->
                    <!-- Licensing information: https://bootstrapmade.com/license/ -->
                    <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ --> Designed by <a :href="appByLink">{{ appBy }}</a>
                </div>
            </section>
        </div>
    </main>
    <!-- End #main -->
</template>