<template>
	<div>
		<h2>일자별 회원 등록 수 기록하는 화면</h2>
		<Bar :chart-data="chartData" />
	</div>
</template>

<script>
import {chartData} from "./exampleData.js";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
	components: {
		Bar
	},
	created(){
		//화면 진입 시, 제일 먼저 실행되는 함수
	},
	data() {
		//데이터 객체 반환 함수
		return {
			chartData:{
				labels: [
					
					],
				datasets: [
					{
					label: 'cnt',
					backgroundColor: '#f87979',
					data: [
						chartData[0].cnt, chartData[1].cnt, chartData[2].cnt, chartData[3].cnt, chartData[4].cnt, chartData[5].cnt, chartData[6].cnt
						]
					}
				]
			}
		};
	},
	methods:{
		//함수 기재
		date(){
			for(var i=0; i<chartData.length; i++){
				return this.chartData[i].cretDt;
			}
		}
	}
};
</script>

<style scoped>

</style>