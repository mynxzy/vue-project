<template>
	<div>
		<h2>일자별 회원 등록 수 기록하는 화면</h2>
		<Bar :chart-data="chart" />
	</div>
</template>

<script>
import {chartData,circleChart} from "./exampleData.js";
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
export default {
	components: {
		Bar
	},
	created(){
		//화면 진입 시, 제일 먼저 실행되는 함수
		this.chartData.forEach(data=>{
			this.chartFields.fields.push(data.cretDt);
			this.chartFields.data.push(data.cnt);
		})
		this.chart={
			labels: this.chartFields.fields,
			datasets: [
				{
				label: 'cnt',
				backgroundColor: '#f87979',
				data: this.chartFields.data
				}
			]
		}
	},
	data() {
		//데이터 객체 반환 함수
		return {
			chartData:chartData,
			circleChart:circleChart,
			chartFields:{
				fields:[],
				data:[],
			},
			chart:{}
		};
	},
	methods:{
		//함수 기재
		date(){
			for(var i=0; i<this.chartData.length; i++){
				return this.chartData[i].cretDt;
			}
		}
	}
};
</script>

<style scoped>

</style>