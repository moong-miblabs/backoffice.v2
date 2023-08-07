<script setup>
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useStore } from '@/stores/index'

const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

const charjs1 	= ref()
const charjs2 	= ref()
const charjs3 	= ref()

onMounted(()=>{
	// trigger discipline
	if(!$store.getFlash){
		$store.setFlash(true)
		$router.go()
	} else {
		$store.setFlash(null)
		$('#charts-nav').collapse('show')
	}
	charjs1.value = new Chart(document.querySelector('#barChart'), {
	    type: 'bar',
	    data: {
	        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	        datasets: [{
	            label: 'Bar Chart',
	            data: [65, 59, 80, 81, 56, 55, 40],
	            backgroundColor: [
	                'rgba(255, 99, 132, 0.2)',
	                'rgba(255, 159, 64, 0.2)',
	                'rgba(255, 205, 86, 0.2)',
	                'rgba(75, 192, 192, 0.2)',
	                'rgba(54, 162, 235, 0.2)',
	                'rgba(153, 102, 255, 0.2)',
	                'rgba(201, 203, 207, 0.2)'
	            ],
	            borderColor: [
	                'rgb(255, 99, 132)',
	                'rgb(255, 159, 64)',
	                'rgb(255, 205, 86)',
	                'rgb(75, 192, 192)',
	                'rgb(54, 162, 235)',
	                'rgb(153, 102, 255)',
	                'rgb(201, 203, 207)'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            y: {
	                beginAtZero: true
	            }
	        }
	    }
	});



	charjs2.value = new Chart(document.querySelector('#pieChart'), {
	    type: 'pie',
	    data: {
	        labels: [
	            'Red',
	            'Blue',
	            'Yellow'
	        ],
	        datasets: [{
	            label: 'My First Dataset',
	            data: [300, 50, 100],
	            backgroundColor: [
	                'rgb(255, 99, 132)',
	                'rgb(54, 162, 235)',
	                'rgb(255, 205, 86)'
	            ],
	            hoverOffset: 4
	        }]
	    }
	});

	charjs3.value = new Chart(document.querySelector('#doughnutChart'), {
	    type: 'doughnut',
	    data: {
	        labels: [
	            'Red',
	            'Blue',
	            'Yellow'
	        ],
	        datasets: [{
	            label: 'My First Dataset',
	            data: [300, 50, 100],
	            backgroundColor: [
	                'rgb(255, 99, 132)',
	                'rgb(54, 162, 235)',
	                'rgb(255, 205, 86)'
	            ],
	            hoverOffset: 4
	        }]
	    }
	});
})

onUnmounted(()=>{
	charjs1.value.destroy()
	charjs2.value.destroy()
	charjs3.value.destroy()
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
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                         <!-- Bar Chart -->
	                         <canvas id="barChart" style="max-height: 400px;"></canvas>
	                     </div>
	                 </div>
	             </div>
	             <div class="col-lg-12">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                         <!-- Pie Chart -->
			                 <canvas id="pieChart" style="max-height: 400px;"></canvas>
	                     </div>
	                 </div>
	             </div>
	             <div class="col-lg-12">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                         <!-- Doughnut Chart -->
				             <canvas id="doughnutChart" style="max-height: 400px;"></canvas>
	                     </div>
	                 </div>
	             </div>
	         </div>
	     </section>
	 </main>
	 <!-- End #main -->
</template>