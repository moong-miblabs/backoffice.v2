<script setup>
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useStore } from '@/stores/index'

const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

const echart1 	= ref()
const echart2 	= ref()
const echart3	= ref()
const echart4 	= ref()

onMounted(()=>{
	if(!$store.getFlash){
		$store.setFlash(true)
		$router.go()
	} else {
		$store.setFlash(null)
		$('#charts-nav').collapse('show')
	}
	console.log(route.name)
	echart1.value = echarts.init(document.querySelector("#barChart")).setOption({
	    xAxis: {
	        type: 'category',
	        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [{
	        data: [120, 200, 150, 80, 70, 110, 130],
	        type: 'bar'
	    }]
	});



	echart2.value = echarts.init(document.querySelector("#verticalBarChart")).setOption({
	    title: {
	        text: 'World Population'
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {},
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'value',
	        boundaryGap: [0, 0.01]
	    },
	    yAxis: {
	        type: 'category',
	        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
	    },
	    series: [{
	            name: '2011',
	            type: 'bar',
	            data: [18203, 23489, 29034, 104970, 131744, 630230]
	        },
	        {
	            name: '2012',
	            type: 'bar',
	            data: [19325, 23438, 31000, 121594, 134141, 681807]
	        }
	    ]
	});



	echart3.value = echarts.init(document.querySelector("#pieChart")).setOption({
	    title: {
	        text: 'Referer of a Website',
	        subtext: 'Fake Data',
	        left: 'center'
	    },
	    tooltip: {
	        trigger: 'item'
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left'
	    },
	    series: [{
	        name: 'Access From',
	        type: 'pie',
	        radius: '50%',
	        data: [{
	                value: 1048,
	                name: 'Search Engine'
	            },
	            {
	                value: 735,
	                name: 'Direct'
	            },
	            {
	                value: 580,
	                name: 'Email'
	            },
	            {
	                value: 484,
	                name: 'Union Ads'
	            },
	            {
	                value: 300,
	                name: 'Video Ads'
	            }
	        ],
	        emphasis: {
	            itemStyle: {
	                shadowBlur: 10,
	                shadowOffsetX: 0,
	                shadowColor: 'rgba(0, 0, 0, 0.5)'
	            }
	        }
	    }]
	});



	echart4.value = echarts.init(document.querySelector("#donutChart")).setOption({
	    tooltip: {
	        trigger: 'item'
	    },
	    legend: {
	        top: '5%',
	        left: 'center'
	    },
	    series: [{
	        name: 'Access From',
	        type: 'pie',
	        radius: ['40%', '70%'],
	        avoidLabelOverlap: false,
	        label: {
	            show: false,
	            position: 'center'
	        },
	        emphasis: {
	            label: {
	                show: true,
	                fontSize: '18',
	                fontWeight: 'bold'
	            }
	        },
	        labelLine: {
	            show: false
	        },
	        data: [{
	                value: 1048,
	                name: 'Search Engine'
	            },
	            {
	                value: 735,
	                name: 'Direct'
	            },
	            {
	                value: 580,
	                name: 'Email'
	            },
	            {
	                value: 484,
	                name: 'Union Ads'
	            },
	            {
	                value: 300,
	                name: 'Video Ads'
	            }
	        ]
	    }]
	});
})

onUnmounted(()=>{
	echart1.value = null
	echart2.value = null
	echart3.value = null
	echart4.value = null
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
				             <div id="barChart" style="min-height: 400px;" class="echart"></div>
	                     </div>
	                 </div>
	             </div>
	             <div class="col-lg-12">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                         <!-- Vertical Bar Chart -->
				             <div id="verticalBarChart" style="min-height: 400px;" class="echart"></div>
	                     </div>
	                 </div>
	             </div>
	             <div class="col-lg-12">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                         <!-- Pie Chart -->
				             <div id="pieChart" style="min-height: 400px;" class="echart"></div>
	                     </div>
	                 </div>
	             </div>
	             <div class="col-lg-12">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                         <!-- Donut Chart -->
				             <div id="donutChart" style="min-height: 400px;" class="echart"></div>
	                     </div>
	                 </div>
	             </div>
	         </div>
	     </section>
	 </main>
	 <!-- End #main -->
</template>