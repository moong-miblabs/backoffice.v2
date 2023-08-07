<script setup>
import * as CONSTANT from '@/constant'
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from '@/stores/index'
import axios from 'axios'

import { useVuelidate } from '@vuelidate/core'
import { helpers, required } from '@vuelidate/validators'
import Swal from 'sweetalert2'


const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

const appName  = ref(CONSTANT.appName)
const appIcon  = ref(CONSTANT.appIcon)
const appBy  	= ref(CONSTANT.appBy)
const appByLink = ref(CONSTANT.appByLink)

const type_password            = ref('password')
const icon_password            = ref('ri-eye-close-fill')

function togglePassword(){
    if(type_password.value == 'text'){
        type_password.value = 'password'
        icon_password.value = 'ri-eye-close-fill'
    } else {
        type_password.value = 'text'
        icon_password.value = 'ri-eye-fill'
    }
}

const form    = reactive({
  username : null,
  password : null
})

const rules   = computed(()=>{
  return {
    username : { required : helpers.withMessage('Username harus diisi', required) },
    password : { required : helpers.withMessage('Password harus diisi', required) }
  }
})

const v$ = useVuelidate(rules, form)

async function onSubmit(){
    v$.value.$validate()
    if (!v$.value.$error) {
        Swal.showLoading()
        try{
            var response = await axios.post(CONSTANT.serverURL+'login',form)
            if(response.data.error_code==0) {
                var data = response.data.data
                var token = response.data.token
                $store.setId(data.id)
                $store.setToken(token)
                $store.setNama(data.nama_user)
                $router.push({name : 'home'})
            } else {
                console.log(response.data)
                Swal.fire('Error',response.data.error_desc,'error')
            }
        } catch(err) {
            console.error(err)
            Swal.fire('Error','System Error','error')
        }
    }
}
</script>

<template>
	<main>
	    <div class="container">
	        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
	            <div class="container">
	                <div class="row justify-content-center">
	                    <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
	                        <div class="d-flex justify-content-center py-4">
	                            <a href="index.html" class="logo d-flex align-items-center w-auto">
	                                <img :src="appIcon" alt="">
	                                <span class="d-none d-lg-block">{{ appName }}</span>
	                            </a>
	                        </div>
	                        <!-- End Logo -->
	                        <div class="card mb-3">
	                            <div class="card-body">
	                                <div class="pt-4 pb-2">
	                                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
	                                    <p class="text-center small">Enter your username & password to login</p>
	                                </div>
	                                <form class="row g-3" @submit.prevent="onSubmit">
	                                    <div class="col-12">
	                                        <label for="yourUsername" class="form-label">Username</label>
	                                        <div class="input-group">
	                                            <input type="text" v-model="form.username" class="form-control" id="yourUsername">
	                                            <div class="invalid-feedback" style="display: block;" v-if="v$.username.$error">{{v$.username.$errors[0].$message}}</div>
	                                        </div>
	                                    </div>
	                                    <div class="col-12">
	                                        <label for="yourPassword" class="form-label">Password</label>
	                                        <div class="input-group">
	                                            <span class="input-group-text" id="inputGroupPrepend">
	                                            	<i :class="icon_password" @click="togglePassword" style="cursor: pointer;"></i>
	                                            </span>
		                                        <input :type="type_password" v-model="form.password" class="form-control" id="yourPassword">
		                                        <div class="invalid-feedback" style="display: block;" v-if="v$.password.$error">{{v$.password.$errors[0].$message}}</div>
		                                    </div>
	                                    </div>
	                                    <div class="col-12" style="visibility: hidden;">
	                                        <div class="form-check">
	                                            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
	                                            <label class="form-check-label" for="rememberMe">Remember me</label>
	                                        </div>
	                                    </div>
	                                    <div class="col-12">
	                                        <button class="btn btn-primary w-100" type="submit">Login</button>
	                                    </div>
	                                    <div class="col-12" style="visibility: hidden;">
	                                        <p class="small mb-0">Don't have account? <a href="pages-register.html">Create an account</a>
	                                        </p>
	                                    </div>
	                                </form>
	                            </div>
	                        </div>
	                        <div class="credits">
	                            <!-- All the links in the footer should remain intact. -->
	                            <!-- You can delete the links only if you purchased the pro version. -->
	                            <!-- Licensing information: https://bootstrapmade.com/license/ -->
	                            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ --> Designed by <a :href="appByLink">{{ appBy }}</a>
	                        </div>
	                    </div>
	                </div>
	            </div>
	        </section>
	    </div>
	</main>
	<!-- End #main -->
</template>