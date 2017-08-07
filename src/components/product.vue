<template>
	<ul class="list-pro-box">
		<div class="pro-list-title">
			<h2>蛋糕<span>新鲜乳脂奶油蛋糕</span></h2>
		</div>
		<div class="libox">
			<ul>
			<li v-for="pro in list">
				<div class="list-pro-content">
					<div class="list-pro-img">
						<img :src="pro.img">
					</div>
					<h3>{{pro.enname}}<span>{{pro.chname}}</span></h3>
					<p class="pro-price">{{pro.price}}</p>
					<span class="cart-add">
						<img src="../../static/assets/list-cart.png" id="add-cart">
					</span>
				</div>
			</li>
			</ul>
		</div>
	</ul>
</template>

<script>
	export default {
		name:"Product",
		props:["list"],
	}
</script>

<style>
.libox{
	padding-left: 0.05rem;
    padding-right: 0.2rem;
}
.list-pro-box{
	width: 100%;
	overflow: hidden;
}
.libox ul{
	overflow: hidden;
    margin-bottom: 0.2rem;
}
.list-pro-box li {
    width: 50%;
   	float: left;
}
.list-pro-box h2 span {
    font-size: 0.1rem;
    display: block;
    line-height: 0.13rem;
    margin-top:0.02rem;
    color: #D5BFA7;
}
.list-pro-content {
    width: 98%;
    position: relative;
    padding-left: 2%;
}
.list-pro-img{
	width: 100%;
	overflow: hidden;
}
.list-pro-img img{
	width: 100%;
	display: block;
}
.list-pro-content h3 {
    font-size: 0.13rem;
    line-height: 1.2em;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #442818;
}
.list-pro-content h3 span {
    font-size: 0.12rem;
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.list-pro-content .pro-price{
	color:#BB9772 ;
	font-size: 0.12rem;
	margin-top: 0.05rem;
}
.cart-add{
	display: inline-block;
    width: 13%;
    height: 8%;
    padding: 5%;
    position: absolute;
    padding-top: 0.2rem;
    right: 0;
    bottom: -3%;
}
#add-cart{
	vertical-align: bottom;
    display:block;
    width: 100%;
    height: 100%;
}
.pro-list-title{
	position: relative;
	text-align: center;
	background: #fbf9f6;
}
.pro-list-title h2{
	padding: 0.08rem 0;
    text-align: center;
    font-size: 0.15rem;
    color:#442818;
    height: 0.3rem;
    margin: 0 auto;
    background: rgba(213,191,167,0.10);
    border-bottom: 0.01rem solid #E9E9E9;
}
.list-pro-box h2 span {
    font-size: 0.1rem;
    display: block;
    line-height: 0.13rem;
    margin-top: 0.02rem;
    color: #D5BFA7;
}
</style>