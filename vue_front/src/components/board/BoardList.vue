<template>
	<div>
		<h2>멤버 리스트</h2>
		조회된 데이터 엑셀 다운로드 기능 구현
		<vue-good-table
			:columns="tableFields"
			:rows="tableData"/>
	</div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table-next';
import {tableData} from "./exampleData.js";
import {tableFields} from "./fields.js";
import 'vue-good-table-next/dist/vue-good-table-next.css'
export default {
	components: {
		VueGoodTable
	},
	created(){
	},
	data() {
		return {
			tableData:tableData,
			tableFields: tableFields
		};
	},
	methods:{
		
	}
};
</script>

<style scoped>
	td, th {
	padding: 10px;
	border: 1px solid #ccc;
	}
</style>