<script setup>
import * as CONSTANT from '@/constant'
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/stores/index'

import axios from 'axios'
import Swal from 'sweetalert2'

const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

onMounted(()=>{
	Swal.showLoading()
	Swal.close()
})
</script>

<template>
	 <main id="main" class="main">
	     <div class="pagetitle">
	         <h1>Blank Page</h1>
	         <nav>
	             <ol class="breadcrumb">
	                 <li class="breadcrumb-item">
	                     <a href="index.html">Home</a>
	                 </li>
	                 <li class="breadcrumb-item">Pages</li>
	                 <li class="breadcrumb-item active">Blank</li>
	             </ol>
	         </nav>
	     </div>
	     <!-- End Page Title -->
	     <section class="section">
	         <div class="row">
	             <div class="col-lg-6">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                     </div>
	                 </div>
	             </div>
	             <div class="col-lg-6">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                     </div>
	                 </div>
	             </div>
	         </div>
	     </section>
	 </main>
	 <!-- End #main -->
</template>