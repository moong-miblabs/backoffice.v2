<script setup>
import * as CONSTANT from '@/constant'
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/stores/index'

const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

const appName  	= ref(CONSTANT.appName)
const appBy  	= ref(CONSTANT.appBy)
const appByLink = ref(CONSTANT.appByLink)
</script>

<template>
	<!-- ======= Footer ======= -->
	<footer id="footer" class="footer">
	    <div class="copyright"> &copy; Copyright <strong>
	            <span>{{ appName }}</span>
	        </strong>. All Rights Reserved </div>
	    <div class="credits">
	        <!-- All the links in the footer should remain intact. -->
	        <!-- You can delete the links only if you purchased the pro version. -->
	        <!-- Licensing information: https://bootstrapmade.com/license/ -->
	        <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ --> Designed by <a :href="appByLink">{{ appBy }}</a>
	    </div>
	</footer>
	<!-- End Footer -->
</template>