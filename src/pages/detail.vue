<template>
	<div class="detail">
		<img :src="src" class="detail-pic">
		<div class="details-box">
			<div class="pro-title">
				<h3>{{ename}}</h3>
				<p>{{cname}}</p>
			</div>
			<p class="specification" @click="appear">规格数量选择</p>
		</div>
		<div class="store-info">
			<p>
				<img src="static/assets/sweet.png">
				<span>参考甜度</span>
				<ul class="sweet-list">
					<li class="isSweet"></li>
					<li class="isSweet"></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</p>
			<p class="info-time">
				<img src="static/assets/dist-time.png">
				<span>配送时间</span>
				<span class="ship-time">现在订购最早明天 09:30配送。每日最晚配送时间21:30。</span>
			</p>
		</div>
		<div style="padding: 0.15rem;background: #FFFFFF; margin-top: 0.12rem;font-size: 0.12rem;color:#442818">
        	/分享，或者独享/
        	<br>
			/多口味、精装小份21cake蛋糕/
			<br>
			/不用刀的瓜分，真是轻松多了/
			<br>
			<strong>
				/试试「向上打开」21cake/
				<br>
				/上方双开拿取设计/
				<br>
				/确保挑选，竞选口味时没有内幕/
				<br>
			</strong>
		</div>
		
		<div class="detail-img">
			<li v-for="pic in pics"><img :src="pic.url"></li>
		</div>
		
		
		<transition name="fade">
			<div class="detail-taste" v-if="hide">
				<div>
					<p class="details-price" @click="appear">￥{{price}}</p>
				</div>
				<ul class="details-options">
					<li class="details-options-size">
						<img src="../../static/assets/size.png">
					</li>
					<li class="details-options-unmber">
						<img src="../../static/assets/unmber.png">{{unmber}}
					</li>
					<li class="details-options-laid">
						<img src="../../static/assets/laid.png">{{laid}}
					</li>
					<li class="details-options-timer">
						<img src="../../static/assets/time.png">{{time}}
					</li>
				</ul>
				<div class="normal-box">
					<p class="detail-spec-title">商品规格</p>
					<ul class="details-suspension-size">
						<li @click="taste(index,$event)" v-for="(ant,index) in ants" :class="{active:index===num}">{{ant.spec}}</li>
					</ul>
				</div>
			</div>
		</transition>
		
		<div class="buttom-cart">
			<div class="go-cart" @click="sucss">加入购物车</div>
		</div>
		
		<Footer/>
	</div>
</template>

<script>
const Footer = r => require.ensure([], () => r(require('@/components/footer.vue')), 'Footer')
	
export default {
	name:'Detail',
	data(){
		return {
			src:"static/assets/d1.jpg",
			ename:"Six Different Flavored Cakes",
			cname:"6种口味切块",
			hide:false,
			price:198,
			isA:true,
			isB:false,
			num:0,
			unmber:"适合6人分享",
			laid:"含6套餐具",
			time:"须提前6小时预订",
			selc:"",
			pics:[
				{url:"./static/assets/d2.jpg"},
				{url:"./static/assets/d3.jpg"},
				{url:"./static/assets/d4.jpg"},
				{url:"./static/assets/d5.jpg"}
			],
			ants:[
				{spec:"6个(6种口味)"},
				{spec:"6个(2种口味)"}
			]
			
		}
	},
	components:{
		"Footer":Footer
	},
	methods:{
		appear(){
			this.hide = !this.hide
		},
		taste(index,e){
			this.num = index;
			this.selc = e.target.innerHTML;
			console.log(this.selc)
		},
		sucss(){
			var ename = this.ename;
			var cname = this.cname;
			var price = this.price;
			var spec = this.selc;
			localStorage.setItem("prod",{ename,cname,price,spec})
			console.log(ename,cname,price,spec)
			this.$router.push({path:"cart"})
		}
	}
	
}
</script>

<style scoped>
	li{
		list-style: none;
		width: 100%;
	}
	.detail{
		position: relative;
		top:0.48rem;
		background: #f1f1f1;
	}
	.detail-pic{
		display: block;
		width: 100%;
	}
	.details-box{
		background: #fff;
	}
	.pro-title{
	    padding: 0 0.24rem;
    	color: #333;
    	border-bottom: 0.01rem solid #eee;
    	padding-bottom: 0.2rem;
	}
	.pro-title h3{
		font-size: 0.24rem;
	    line-height: 0.3rem;
	    padding-top: 0.1rem;
	    
	}
	.pro-title p{
		font-size: 0.14rem;
    	line-height: 0.18rem;
	}
	.specification{
	    border-bottom: 0.01rem solid #eee;
   		margin-left:0.24rem;
   		font-size: 0.12rem;
   		height: 0.45rem;
	    font-size: 0.13rem;
	    line-height: 0.45rem;
	    color: #442818;
	    background: url(../../static/assets/Page-go.png) no-repeat 3.3rem 0.15rem;
	    background-size: 0.1rem;	
	}
	.store-info{
		background-color: #fff;
	    padding: 0.2rem 0.1rem;
	    margin-top: 0.12rem;
	    font-size: 0.12rem;
	    color: #442818;
	}
	.store-info p{
	    overflow: hidden;
    	margin-bottom: 15px;
	}
	.store-info p img{
	    height: 0.15rem;
	    width: auto;
	    display: block;
	    vertical-align: top;
	    float: left;
	    margin-left: 0.24rem;
	    margin-right: 0.1rem;
	}
	.store-info span,.store-info img,.store-info .ship-time{
		float: left;
	}
	.store-info .ship-time{
		display: inline-block;
		width: 60%;
		margin-left: 0.12rem;
	}
	.sweet-list{
		display: inline-block;
		overflow: hidden;
	}
	.sweet-list li{
	   	background: url(../../static/assets/sweet-01.png) no-repeat center;
		display:inline-block;
	    height: 0.14rem;
	    width: 0.14rem;
	    background-size: 100%;
	    margin-right: 0.1rem;
	    margin-left: 0.14rem;
	}
	.buttom-cart{
		position: fixed;
	    height: 0.46rem;
	    left: 0;
	    bottom: 0;
	    width: 100%;
	    z-index: 100;
	    background: #fff;
	    z-index: 100000000000;
	    box-shadow: 0px -2px 4px 0px rgba(0,0,0,0.1);
	}
	.go-cart{
	    background: #442818;
	    text-align: center;
	    line-height: 0.34rem;
	    width: 56%;
	    margin: 0 auto;
	    color: #fff;
	    margin-top: 0.05rem;
	    font-size: 0.12rem;	
	}
	#footer{
		margin-bottom: 0.25rem;
	}
	.detail-img{
	    margin-top: 0.12rem;
	    width: 100%;
	    overflow: hidden;
	    margin-bottom: 0.2rem;
	}
	.detail-img img{
		width: 100%;
		display: block;
	}
	.detail-taste{
		position: fixed;
	    bottom: 0;
	    left: 0;
	    background: #fff;
	    width: 100%;
	    z-index: 1000;
	    transform-origin: 0px 0px 0px;
	    opacity: 1;
	    transform: scale(1, 1);
	    box-shadow: 0px -2px 4px 0px rgba(0,0,0,0.1);
    	padding: 0.14rem 0.24rem 0.08rem 0.24rem;
    	color: #442818;
	}
	.details-price {
	    font-size: 0.15rem;
	    line-height: 0.22rem;
	    margin-bottom: 0.15rem;
	    font-weight: bold;
    	background: #fff url(../../static/assets/list-hide.png) no-repeat 3.2rem 0.02rem;
    	background-size: 0.15rem;
	}
	.details-options {
	    overflow: hidden;
	    width: 100%;
	}
	.details-options li {
	    float: left;
	    width: 50%;
	    margin-bottom: 0.07rem;
	    font-size: 0.12rem;
	}
	.details-options li img{
	    height: 0.15rem;
	    width: 0.15rem;
	    display: inline-block;
	    vertical-align: middle;
	    margin-right: 0.08rem;	
	}
	.normal-box{
	    margin: 0;
	    padding: 0;
	    font-size: 0.12rem;
	    color: #442818;
	}
	.detail-spec-title {
	    padding-top: 0.1rem;
	}
	.details-suspension-size{
	    overflow: hidden;
	    margin-left: -2%;
	    margin-top: 0.15rem;
	    padding-bottom: 0.54rem;
	}
	.details-suspension-size li{
	    width: 24%;
	    height: 0.32rem;
	    background: #F7F7F7;
	    float: left;
	    line-height: 0.32rem;
	    text-align: center;
	    font-size: 0.14rem;
	    margin-left: 2%;
	    margin-bottom: 0.1rem;
	}
	.active{
	    border: 1px solid #000;
	    box-sizing: border-box;
	    background: url(../../static/assets/icon_selected.png) no-repeat top left !important;
	    background-size: 0.12rem !important;
	}
	.fade-enter-active{
		transition:all 0.6s ease;
	}
	.fade-leave-active{
		transition:all 0.1s;
	}
	.fade-enter,.trans-leave-to{
		transform: translateY(2.4rem);
	}
</style>