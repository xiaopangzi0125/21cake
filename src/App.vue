<template>
  <div id="app">
  	<div id="header">
	 		<div class="icon-left" @click="msg">
	 			<i class="iconfont icon-1-copy" v-if="show"></i>
	 			<i class="iconfont icon-chahao" v-if="!show"></i>
	 		</div>
	 		
	 		<router-link to="index"><img src="static/assets/logo.png" class="title-logo" alt="logo"></router-link>
	 		<div class="icon-right">
	 				<span @click="city"><i class="iconfont icon-ditu-copy"></i>{{cityname}}</span>	
	 				<router-link to="cart"><i class="iconfont icon-gouwuchekong" id="icon-cart"></i></router-link>
	 		</div>
	 		<div class="top-header-menu" v-if="!show" @click="showNav">
	 			<p><router-link to="index"><i class="iconfont icon-shendubaojie"></i><span>首页</span></router-link></p>
	 			<p><router-link to="list"><i class="iconfont icon-fenlei"></i><span>分类</span></router-link></p>
	 			<p><router-link to="login"><i class="iconfont icon-gerenzhongxin"></i><span>个人</span></router-link></p>
	 		</div>
  	</div>
  	<Cover v-if="fade" @submits="submits" :isFade="appear"></Cover>
    <router-view></router-view>
    
  </div>
  
</template>

<script>
const Cover = r => require.ensure([], () => r(require('@/components/cover.vue')), 'Cover')	

export default {
  name: 'app',
  data(){
  	return {
  		show:true,
  		fade: 0,
  		cityname:"北京"
  	}
  },
  components:{
  	  "Cover":Cover
  },
  methods:{
  	msg(){	
			this.show = !this.show
  	},
  	showNav(){
  		this.show = true
  	},
  	city(){
  		this.fade = !this.fade
//		console.log(this.fade)
  	},
  	submits(cities){  		
  		this.cityname = cities
//		console.log(cities)
  	},
  	appear(){
  		this.fade = 0;
  	}
  }
}
</script>

<style scoped>
a{
	text-decoration: none;
	color: #442818;		
}
.iconfont{
	font-size: 0.18rem;
	color: #442818;
}

#header{
	width: 100%;
	height: 0.48rem;
	line-height: 0.48rem;
	position: fixed;
	box-shadow: 0 0.02rem 0.04rem 0 rgba(0,0,0,0.10);
	background: white;
	z-index: 6;
}
.icon-left{
	float: left;
	margin-left: 0.15rem;
}
.icon-left .icon-1-copy{
	font-size: 0.28rem;
	background-size: cover;
	display: inline-block;
	vertical-align: middle;
	display: block;
	
}
.icon-left .icon-chahao{
	font-size: 0.28rem;
	background-size: cover;
	display: inline-block;
	vertical-align: middle;
	display: block;
}
.title-logo{
	position: absolute;
	left: 50%;
	top: 0.12rem;
	display: inline-block;
	width: 0.30rem;
	margin-left: -0.15rem;
}
.icon-right{
	float: right;
	font-size: 0.13rem;
	color: #442818;
}
#icon-cart{
	padding: 0 0.15rem;
}

.top-header-menu{
	position: absolute;
	left: 0;
	top: 0.48rem;
	width: 100%;
	height: 0.52rem;
	background: #fff;
	overflow: hidden;
	display: none;
	box-shadow: 0px 7px 10px 0px rgba(145, 145, 145, 0.50);
	z-index: 999;
	color: #442818;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.top-header-menu p{
	height: 0.52rem;
	font-size: 0.12rem;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
}
.top-header-menu p i{
	display: block;
	width: 0.2rem;
	height: 0.2rem;
	margin-left: 0.03rem;
}

</style>
