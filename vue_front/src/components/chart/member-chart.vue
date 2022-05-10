<template>
	<div>
		<h2>일자별 회원 등록 수 기록하는 화면</h2>
	</div>
</template>

<script>
import {chartData} from "./exampleData.js";
export default {
	components: {

	},
	created(){
		//화면 진입 시, 제일 먼저 실행되는 함수
	},
	data() {
		//데이터 객체 반환 함수
		return {
			chartData:chartData
		};
	},
	methods:{
		//함수 기재
		
	}
};
</script>

<style scoped>

</style>