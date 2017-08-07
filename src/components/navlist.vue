<template>
	<div class="products-list-nav-box">
		<div class="products-list-nav">
			<ul class="list-nav" @click="chec">
				<li><router-link to="recommend"><span>推荐</span></router-link></li>
				<li><router-link to="recommend"><span>生日专区</span></router-link></li>
				<li><router-link to="list"><span :class="{borders: isActive}">蛋糕</span></router-link></li>
				<li><router-link to="tea"><span :class="{borders: !isActive}">下午茶</span></router-link></li>
				<li><span>设计师礼品</span></li>
				<li><span>全国配送</span></li>
				<li><span>企业专区</span></li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default {
		name:"Navlist",
		data(){
			return {
				isActive:true
			}
		},
		methods:{
			chec:function(e){
				this.isActive = !this.isActive
			}
		}
	}
</script>

<style scoped>
a{
	text-decoration: none;
}
.products-list-nav-box {
	width: 100%;
    position: fixed;
    top: 0.48rem;
    z-index: 5;
    height: 0.4rem;
    width: 100%;
    overflow: hidden;
    background: #fff;
}
.products-list-nav{
	width: 100%;
    overflow: auto;
    position: relative;
    height: 0.39rem;
}
.list-nav {
	width: 154%;
    position: absolute;
    top: 0;
    height: 0.4rem;
    background: #fff;
    overflow-x: visible;
    overflow-y: hidden;
    transition: all 0.5s;
}

.list-nav li{
	float: left;
	height: 0.4rem;
    text-align: center;
    width: 0.825rem;
}
.list-nav li span{
	display: block;
	font-size: 0.14rem;
    line-height: 0.38rem;
    color: #707070;
}
.borders{
	border-bottom: 2px solid #6d574a;
}

</style>