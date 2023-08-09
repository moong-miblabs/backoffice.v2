<script setup>
import * as CONSTANT from '@/constant'
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useStore } from '@/stores/index'

import axios from 'axios'
import Swal from 'sweetalert2'

import * as dateFormat from '@/helper/dateformat'

const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

const dataSet = ref([])

async function getData(){
    try {
        var response = await axios.get(CONSTANT.serverURL+'list-responden',{
            headers : {
                Authorization : $store.getToken
            }
        })
        if(response.data.error_code == 0){
            dataSet.value = response.data.data
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
    const table = new DataTable('#dataTableId',{
        columnDefs: [
            {
                searchable: false,
                orderable: false,
                targets: 0
            }
        ],
        order: [[1, 'asc']]
    })
    table
    .on('order.dt search.dt', function () {
        let i = 1;
 
        table
            .cells(null, 0, { search: 'applied', order: 'applied' })
            .every(function (cell) {
                this.data(i++);
            });
    })
    .draw();
    if($store.getFlash){
        Swal.fire($store.getFlash)
        $store.setFlash(null)
    } else {
    	Swal.close()
    }
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
	             <div class="col-lg-12">
	                 <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">Default Table</h5>
                            <div class="row text-right mb-3">
                                <div class="col"></div>
                                <div class="col"></div>
                                <div class="col"></div>
                                <div class="col"></div>
                                <div class="col"></div>
                                <div class="col">
                                    <RouterLink :to="{ name : 'create-responden' }"><button type="button" class="btn btn-success">Success</button></RouterLink>
                                </div>
                            </div>
                            <!-- Default Table -->
                            <table id="dataTableId" class="table table-striped" style="width:100%; font-size:.95em">
                                <thead>
                                    <tr>
                                        <th scope="col">NO.</th>
                                        <th scope="col">Nama</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Tanggal Daftar</th>
                                        <th scope="col">Opsi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in dataSet" :key="data.id">
                                        <th scope="row"></th>
                                        <td>{{ data.nama_responden }}</td>
                                        <td>{{ data.username_responden }}</td>
                                        <td><span style="display:none;">{{ dateFormat.file(data.created_at) }}</span>{{ dateFormat.human(data.created_at) }}</td>
                                        <td>
                                            <button type="button" class="btn btn-info btn-sm"><i class="bi bi-info-circle"></i></button> &nbsp;
                                            <RouterLink :to="{ name : 'update-responden', params : { id : data.id }  }"><button type="button" class="btn btn-warning btn-sm"><i class="bi bi-exclamation-triangle"></i></button></RouterLink> &nbsp;
                                            <RouterLink :to="{ name : 'delete-responden', params : { id : data.id }  }"><button type="button" class="btn btn-danger btn-sm"><i class="bi bi-exclamation-octagon"></i></button></RouterLink>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- End Default Table Example -->
                        </div>
	                 </div>
	             </div>
	         </div>
	     </section>
	 </main>
	 <!-- End #main -->
</template>