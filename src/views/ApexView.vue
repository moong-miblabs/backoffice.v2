<script setup>
import { ref, reactive, computed, onMounted, onUpdated, onUnmounted } from 'vue'
import { useRouter, useRoute, RouterLink } from 'vue-router'
import { useStore } from '@/stores/index'

const $store 	= useStore()
const $router 	= useRouter()
const route 	= useRoute()

const apex1 	= ref()
const apex2 	= ref()
const apex3 	= ref()
const apex4 	= ref()

onMounted(()=>{
	apex1.value = new ApexCharts(document.querySelector("#columnChart"), {
	    series: [{
	        name: 'Net Profit',
	        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
	    }, {
	        name: 'Revenue',
	        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
	    }, {
	        name: 'Free Cash Flow',
	        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
	    }],
	    chart: {
	        type: 'bar',
	        height: 350
	    },
	    plotOptions: {
	        bar: {
	            horizontal: false,
	            columnWidth: '55%',
	            endingShape: 'rounded'
	        },
	    },
	    dataLabels: {
	        enabled: false
	    },
	    stroke: {
	        show: true,
	        width: 2,
	        colors: ['transparent']
	    },
	    xaxis: {
	        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
	    },
	    yaxis: {
	        title: {
	            text: '$ (thousands)'
	        }
	    },
	    fill: {
	        opacity: 1
	    },
	    tooltip: {
	        y: {
	            formatter: function(val) {
	                return "$ " + val + " thousands"
	            }
	        }
	    }
	})
	apex1.value.render();



	apex2.value = new ApexCharts(document.querySelector("#barChart"), {
		series: [{
			data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
		}],
		chart: {
			type: 'bar',
			height: 380
		},
		plotOptions: {
			bar: {
				barHeight: '100%',
				distributed: true,
				horizontal: true,
				dataLabels: {
					position: 'bottom'
				},
			}
		},
		colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
			'#f48024', '#69d2e7'
		],
		dataLabels: {
			enabled: true,
			textAnchor: 'start',
			style: {
				colors: ['#fff']
			},
			formatter: function(val, opt) {
				return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
			},
			offsetX: 0,
			dropShadow: {
				enabled: true
			}
		},
		stroke: {
			width: 1,
			colors: ['#fff']
		},
		xaxis: {
			categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
				'United States', 'China', 'India'
			],
		},
		yaxis: {
			labels: {
				show: false
			}
		},
		title: {
			text: 'Custom DataLabels',
			align: 'center',
			floating: true
		},
		subtitle: {
			text: 'Category Names as DataLabels inside bars',
			align: 'center',
		},
		tooltip: {
			theme: 'dark',
			x: {
				show: false
			},
			y: {
				title: {
					formatter: function() {
						return ''
					}
				}
			}
		}
	})
	apex2.value.render();



	apex3.value = new ApexCharts(document.querySelector("#pieChart"), {
	    series: [44, 55, 13, 43, 22],
	    chart: {
	        height: 350,
	        type: 'pie',
	        toolbar: {
	            show: true
	        }
	    },
	    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E']
	})
	apex3.value.render();



	apex4.value = new ApexCharts(document.querySelector("#donutChart"), {
	    series: [44, 55, 13, 43, 22],
	    chart: {
	        height: 350,
	        type: 'donut',
	        toolbar: {
	            show: true
	        }
	    },
	    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
	})
	apex4.value.render();
})

onUnmounted(()=>{
	apex1.value.destroy()
	apex2.value.destroy()
	apex3.value.destroy()
	apex4.value.destroy()
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
	                         <!-- Column Chart -->
			                 <div id="columnChart"></div>
	                     </div>
	                 </div>
	             </div>
	             <div class="col-lg-12">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                         <!-- Bar Chart -->
				             <div id="barChart"></div>
	                     </div>
	                 </div>
	             </div>
	             <div class="col-lg-12">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                         <!-- Pie Chart -->
				             <div id="pieChart"></div>
	                     </div>
	                 </div>
	             </div>
	             <div class="col-lg-12">
	                 <div class="card">
	                     <div class="card-body">
	                         <h5 class="card-title">Example Card</h5>
	                         <p>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
	                         <!-- Donut Chart -->
				             <div id="donutChart"></div>
	                     </div>
	                 </div>
	             </div>
	         </div>
	     </section>
	 </main>
	 <!-- End #main -->
</template>