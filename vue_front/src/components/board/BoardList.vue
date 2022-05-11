<template>
	<div>
		<h2>멤버 리스트</h2>
		조회된 데이터 엑셀 다운로드 기능 구현
		<table>
			<tr>
				<th>no</th>
				<th>id</th>
				<th>memberNm</th>
				<th>silverAddr</th>
				<th>auth</th>
				<th>category</th>
				<th>memberHp</th>
				<th>cretDt</th>
			</tr>
			<tr v-for="item in tableData" :key="item">
				<td>{{item.no}}</td>
				<td>{{item.id}}</td>
				<td>{{item.memberNm}}</td>
				<td>{{item.silverAddr}}</td>
				<td>{{item.auth}}</td>
				<td>{{item.category}}</td>
				<td>{{item.memberHp}}</td>
				<td>{{item.cretDt}}</td>
			</tr>
    	</table>
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
	td, th {
	padding: 10px;
	border: 1px solid #ccc;
	}
</style>