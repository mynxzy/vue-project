
import {createWebHistory, createRouter} from 'vue-router';
import HelloWorld from '@/components/HelloWorld'; //메인 컴포넌트 호출
import List from '@/components/board/BoardList.vue'; //게시판 리스트 컴포넌트 호출


const routes = [
	{
		path:'/'
		,name:'HelloWorld'
		,component:HelloWorld
	}
	,{
		path:'/board/List'
		,name:'boardList'
		,component:List
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router