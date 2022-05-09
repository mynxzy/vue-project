<template>
  <div id="app">
    <!-- 추가된 헤더 컴포넌트 사용 -->
    <PageHeader />
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
	
    <!-- 추가된 풋터 컴포넌트 사용 -->
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from './components/common/PageHeader.vue'; //import 헤더 추가
import HelloWorld from './components/HelloWorld.vue'; 
import PageFooter from './components/common/PageFooter.vue'; //import 풋터 추가

export default {
  name: 'App',
  components: {
    PageHeader          //헤더 컴포넌트 추가
    , HelloWorld
    ,PageFooter         //풋터 컴포넌트 추가
    
  }
}
</script>

<style>
html,body{padding:0; margin:0;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0; padding:0;
}
</style>