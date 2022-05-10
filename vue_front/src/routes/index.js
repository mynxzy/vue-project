
import {createWebHistory, createRouter} from 'vue-router';
import List from '@/components/board/BoardList.vue'; //게시판 리스트 컴포넌트 호출
import chart from '@/components/chart/member-chart.vue'; //일자별 회원 가입한 인원수 차트로 노출
import mainPage from '@/components/main/mainPage.vue'; //메인화면


const routes = [
	{
		path:'/'
		,name:'main-page'
		,component:mainPage
	}
	,{
		path:'/member'
		,name:'member-list'
		,component:List
	}
	,{
		path:'/chart'
		,name:'member-chart'
		,component:chart
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

export default router