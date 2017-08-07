<template>
	<div v-if="del" class="goods">
		<div class="cart-pro-box">
			<img :src="list.img">
			<div class="cart-pro-title">
				<h2>{{list.ename}}<span>{{list.cname}}</span></h2>
				<p>规格：{{list.spec}}</p>
				<p class="cart-price">￥{{list.price}}</p>
			</div>
		</div>
		<div class="cart-pro-number">
			<span :class="{delete:isA}" class="action-quantity-minus" @click="sub($event)">
				<img src="../../static/assets/-.png" v-if='isB'>
			</span>
			<span class="quantity ">{{list.count}}</span>
			<span class="plus" @click="add"><img src="static/assets/+.png"></span>
		</div>
		<p class="laid-count">每份含免费餐具1套</p>
	</div>
</template>

<script>
export default {
	name:"Cartcont",
	props:["list"],
	data(){
		return{
			isA:0,
			isB:1,
			del:1,
			num:this.list.price
		}
	},
	methods:{
		add(){ //数量增加
//			var curr = this.list[index];
			if(this.list.count > 100){
				return
			}else{
			
				this.list.count++;
				this.list.price = this.list.count * this.num;
				var priceOne = this.list.price;
				console.log(priceOne)
				this.$emit("add",priceOne)
				this.isB = 1;
				this.isA = 0;
			}
		},
		sub(e){ //数量减少和删除
			if(this.list.count > 2){
				this.list.count--
				this.list.price = this.list.count * this.num
			}else if(this.list.count <= 2 && this.list.count > 1){
				this.list.count--
				this.list.price = this.num
				this.isB = 0;
				this.isA = 1;
			}else if(this.list.count==1){
				this.del = 0
				
			}
		}
	}
	
}
</script>

<style scoped>
.goods{
	background: #fff;
    margin-bottom: 0.15rem;
    padding: 0 0.2rem;
    padding-bottom: 0.15rem;
    position: relative;
}
.cart-pro-box{
	height: 1.2rem;
    overflow: hidden;
    line-height: 0.15rem;
    display: block;
}
.cart-pro-box img {
    display: block;
    float: left;
    width: 109px;
    height: 120px;
}
.cart-pro-title {
    padding-left: 1.28rem;
}
.cart-pro-box h2 {
    padding-top: 0.2rem;
    color: #442818;
    font-size: 0.13rem;
}
.cart-pro-box h2 span {
    font-size: 0.12rem;
    color: #442818;
    display: block;
}
.cart-pro-box p {
    font-size: 0.11rem;
    color: #969696;
}
.cart-pro-box .cart-price {
    margin-top: 0.12rem;
}
.cart-pro-number {
    position: absolute;
    height: 0.26rem;
    width: 0.78rem;
    overflow: hidden;
    top: 0.75rem;
    right: 0.2rem;
}
.action-quantity-minus{
	display: block;
    float: left;
    height: 0.26rem;
    width: 0.26rem;
    font-size: 0.26rem;
    line-height: 0.26rem;
    text-align: center;
    background: #F0F0F0;
}
.delete {
    background: #F0F0F0 url(../../static/assets/delect-min.png) no-repeat center!important;
    background-size: 0.08rem 0.1rem!important;;
}
.cart-pro-number span {
    display: block;
    float: left;
    height: 0.26rem;
    width: 0.26rem;
    line-height: 0.26rem;
    text-align: center;
    background: #F7F7F7;
    color: #969696;
    font-size: 0.12rem;
}
.cart-pro-number .plus{
	background: #F0F0F0
}
.plus img,.action-quantity-minus img{
	display: block;
    width: 0.12rem;
    margin-top: 0.07rem;
    margin-left: 0.07rem;
}
.action-quantity-minus img{
	 margin-top: 0.1rem;
}
.laid-count {
    height:0.46rem;
    line-height:0.46rem;
    background: url(../../static/assets/cart-laid.png) no-repeat left;
    background-size:0.46rem;
    padding-left:0.55rem;
}
</style>