<template>
	<div>
		<h2>멤버 리스트</h2>
	</div>
	<div>
		조회된 데이터 엑셀 다운로드 기능 구현
	</div>
</template>

<script>
import {tableData} from "./exampleData.js";
export default {
	components: {

	},
	created(){
		alert(this.tableData[0].memberNm);
	},
	data() {
		return {
			tableData:tableData
		};
	},
	methods:{
		
	}
};
</script>

<style scoped>

</style>