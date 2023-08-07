<script setup>
import * as CONSTANT from '@/constant'
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useStore } from '@/stores/index'

import axios from 'axios'
import Swal from 'sweetalert2'
import { useVuelidate } from '@vuelidate/core'
import { helpers, required, requiredIf, sameAs } from '@vuelidate/validators'

import * as dateFormat from '@/helper/dateformat'

const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

const data = ref({})

async function getData(){
    try {
        var response = await axios.get(CONSTANT.serverURL+'detail-responden/'+route.params.id,{
            headers : {
                Authorization : $store.getToken
            }
        })
        if(response.data.error_code == 0){
            console.log(response.data.data)
            data.value = response.data.data
            form.nama_responden = response.data.data.nama_responden
            form.username_responden = response.data.data.username_responden
            form.kelompok = response.data.data.kelompok
        } else {
            Swal.fire('Error',response.data.error_desc,'error')
        }
    } catch(error) {
        if (error.response) {
            console.log('error.response.data',error.response.data);
            console.log('error.response.status',error.response.status);
            console.log('error.response.headers',error.response.headers);
        } else if (error.request) {
            console.log('error.request',error.request);
        } else {
            console.log('Error', error.message);
        }
        console.log('error.config',error.config);
    }
}

onMounted(async ()=>{
    Swal.showLoading()
    await getData()
	Swal.close()
})

const type_password            = ref('password')
const icon_password            = ref('ri-eye-close-fill')
const type_password_confirm    = ref('password')
const icon_password_confirm    = ref('ri-eye-close-fill')

function togglePassword(){
    if(type_password.value == 'text'){
        type_password.value = 'password'
        icon_password.value = 'ri-eye-close-fill'
    } else {
        type_password.value = 'text'
        icon_password.value = 'ri-eye-fill'
    }
}

function togglePasswordConfirm(){
    if(type_password_confirm.value == 'text'){
        type_password_confirm.value = 'password'
        icon_password_confirm.value = 'ri-eye-close-fill'
    } else {
        type_password_confirm.value = 'text'
        icon_password_confirm.value = 'ri-eye-fill'
    }
}

const form    = reactive({
    nama_responden : null,
    username_responden : null,
    password_responden : null,
    password_confirm : null,
    kelompok : null
})

const rules   = computed(()=>{
  return {
    nama_responden : { required : helpers.withMessage('Nama Responden harus diisi',required) },
    username_responden : { required : helpers.withMessage('Username Responden harus diisi',required) },
    kelompok : { required : helpers.withMessage('Nama Responden harus dipilih',required) }
  }
})

const v$ = useVuelidate(rules, form)

async function onSubmit(){
    v$.value.$validate()
    if (!v$.value.$error) {
        if(form.password_responden) {
            if(form.password_confirm != form.password_responden) {
                Swal.fire('Peringatan','Password dan Password Confirm tidak sama','warning')
                return
            }
        }
        Swal.showLoading()
        try{
            var response = await axios.post(CONSTANT.serverURL+'update-responden/'+route.params.id,form,{
                headers : {
                    Authorization : $store.getToken
                }
            })
            if(response.data.error_code==0) {
                $store.setFlash({
					icon: 'success',
					title: 'Berhasil',
					text: 'Berhasil mengubah Responden'
				})
                $router.push({ name : 'responden' })
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
	             <div class="col-lg-12">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">General Form Elements</h5>
                            <!-- General Form Elements -->
                            <form @submit.prevent="onSubmit">
                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-2 col-form-label">Nama</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model="form.nama_responden">
                                        <div class="invalid-feedback" style="display:block;" v-if="v$.nama_responden.$error">{{v$.nama_responden.$errors[0].$message}}</div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputText" class="col-sm-2 col-form-label">Username</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" v-model="form.username_responden">
                                        <div class="invalid-feedback" style="display:block;" v-if="v$.username_responden.$error">{{v$.username_responden.$errors[0].$message}}</div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
                                    <div class="col-sm-10">
                                        <div class="input-group has-validation">
                                            <span class="input-group-text" id="inputGroupPrepend">
                                                <i :class="icon_password" @click="togglePassword" style="cursor: pointer;"></i>
                                            </span>
                                            <input :type="type_password" class="form-control" v-model="form.password_responden">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label for="inputPassword" class="col-sm-2 col-form-label">Password Confirm</label>
                                    <div class="col-sm-10">
                                        <div class="input-group has-validation">
                                            <span class="input-group-text" id="inputGroupPrepend">
                                                <i :class="icon_password_confirm" @click="togglePasswordConfirm"  style="cursor: pointer;"></i>
                                            </span>
                                            <input :type="type_password_confirm" class="form-control" v-model="form.password_confirm">
                                        </div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label">Kelompok</label>
                                    <div class="col-sm-10">
                                        <select class="form-select" aria-label="Default select example" v-model="form.kelompok">
                                            <option value="" selected>Open this select menu</option>
                                            <option value="II">Intervensi</option>
                                            <option value="KK">Kontrol</option>
                                        </select>
                                        <div class="invalid-feedback" style="display:block;" v-if="v$.kelompok.$error">{{v$.kelompok.$errors[0].$message}}</div>
                                    </div>
                                </div>
                                <div class="row mb-3">
                                    <label class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-10">
                                        <button type="submit" class="btn btn-primary">Submit Form</button>
                                    </div>
                                </div>
                            </form>
                            <!-- End General Form Elements -->
                        </div>
                    </div>
	             </div>
	         </div>
	     </section>
	 </main>
	 <!-- End #main -->
</template>