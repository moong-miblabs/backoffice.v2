<script setup>
import * as CONSTANT from '@/constant'
import { onMounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useStore } from '@/stores/index'

import axios from 'axios'
import Swal from 'sweetalert2'

const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

onMounted(async ()=>{
	Swal.fire({
		title: 'Anda yakin menghapus responden tersebut?',
		showDenyButton: true,
		confirmButtonText: 'Hapus!',
		denyButtonText: 'Batalkan',
	})
	.then(async (result) => {
		if (result.isConfirmed) {
			var response = await axios.get(CONSTANT.serverURL+'delete-responden/'+route.params.id,{
				headers : {
					Authorization : $store.getToken
				}
			})
			if(response.data.error_code == 0){
				$store.setFlash({
					icon: 'success',
					title: 'Berhasil',
					text: 'Berhasil menghapus Responden'
				})
			} else {
				$store.setFlash({
					icon: 'Error',
					title: 'Gagal',
					text: response.data.error_desc
				})
			}
		}
	})
	.finally(()=>{
		$router.push({ name : 'responden' })
	})
})
</script>

<template>
    <div></div>
</template>