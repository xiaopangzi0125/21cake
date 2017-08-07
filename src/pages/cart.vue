<template>
	<div class="cartbox">
		<div class="emptyCart" v-show="show">
			<img src="static/assets/cart-empty.png">
			<p>您的购物车里还没有商品</p>
			<h5>去购物>></h5>
		</div>
		<div class="fullCart" v-show="!show">
			<p class="cart-top-tip">· 满100元免配送服务费 ·</p>
			<ul class="cart-pro-list">
				<li class="goods" v-for="(pro,index) in cartlist">
					<div class="cart-pro-box">
						<img :src="pro.img">
						<div class="cart-pro-title">
							<h2>{{pro.ename}}<span>{{pro.cname}}</span></h2>
							<p>规格：{{pro.spec}}</p>
							<p class="cart-price">￥{{pro.price*pro.count}}</p>
						</div>
					</div>
					<div class="cart-pro-number">
						<span :class="{delete:isA}" class="action-quantity-minus" @click="sub(index)">
							<img src="../../static/assets/-.png" v-if='isB'>
						</span>
						<span class="quantity ">{{pro.count}}</span>
						<span class="plus" @click="add(index)"><img src="static/assets/+.png"></span>
					</div>
					<p class="laid-count">每份含免费餐具1套</p>
				</li>
			</ul>
			<Matchpro></Matchpro>
		</div>
		<div class="place-order-bottom">
			<span class="order-delete-but" @click="dele"></span>
			<span class="place-order-but">去结算</span>
			<div class="pay-money">
				<div>￥<span>{{total}}</span><span>商品</span></div>
				<div class="pay-money-plus">+</div>
				<div>￥<span>0</span><span>配送费</span></div>
			</div>
		</div>
	</div>
</template>
<script>
//const Cartprod = r => require.ensure([], () => r(require('@/components/cartProd.vue')), 'Cartprod')	
const Matchpro = r => require.ensure([], () => r(require('@/components/matchPro.vue')), 'Matchpro')	

export default {
	name:'Cart',
	data(){
		return {
			show:0,
			total:0,
			isA:1,
			isB:0,
			del:1,
			cartlist:[
				{img:"http://static.21cake.com/public/images/c4/64/20/bd18af38bed3e10643cdab774e23979c.jpg",
				 ename:"Mango Jerry",
				 cname:"小切块-芒果慕斯",
				 spec:"份",
				 price:36.00,
				 count:1
				},
				{img:"http://static.21cake.com/public/images/de/13/3a/ba816171feb01177c20633859ba7b29c.jpg",
				 ename:"Bailey's Love Triangle",
				 cname:"百利甜情人",
				 spec:"2.0磅",
				 price:298.00,
				 count:1
				},
				{img:"http://static.21cake.com/public/images/55/58/88/98477ed9cb207d6b7ebbcc44b3c0ecde.jpg",
				 ename:"21cake",
				 cname:"21cake冰淇淋狂喜套餐（赠冰包）",
				 spec:"份",
				 price:468.00,
				 count:1
				}
			],
//			num:this.pro.price
		}
	},
	mounted(){
		this.sum();
	},
	methods:{
		add(index){ //数量增加
			this.cartlist[index].count++;
			this.sum();
//			this.num = this.cartlist[index].price * this.cartlist[index].count;
//			this.list.price = this.list.count * this.num;
//			var priceOne = this.list.price;
			this.isA = 0;
			this.isB = 1;
		},
		sub(index){ //数量减少和删除
			if(this.cartlist[index].count > 2){
				this.cartlist[index].count--;
				this.sum();
//				this.list.price = this.list.count * this.num
			}else if(this.cartlist[index].count <= 2 && this.cartlist[index].count > 1){
				this.cartlist[index].count--;
				this.sum();
//				this.pro.price = this.num
				this.isB = 0;
				this.isA = 1;
			}else if(this.cartlist[index].count==1){
				this.cartlist.splice(index,1)
				this.sum();
			}
		},
		dele(){
			this.show = 1
		},
		sum(){ //计算总价，在其他函数内部调用自己封装的函数要加上this.函数名
			var that = this;
			that.total = 0;
			for(var i = 0;i < that.cartlist.length;i++){
				that.total += that.cartlist[i].price*that.cartlist[i].count;
			}
			console.log(this.total)
		}
	},
	components:{
		"Matchpro":Matchpro
	}
	
}
</script>

<style scoped>
.cartbox{
	width: 100%;
	position: relative;
	top:0.48rem;
	min-height: 6rem;
	background: #f8f8f8;
}
.emptyCart,.fullCart{
	max-width: 4.2rem;
    margin: 0 auto;
    margin-bottom: 0.44rem;
}
.emptyCart img {
	height: 1.5rem;
    width: 1.5rem;
    display: block;
    margin: 0 auto;
}
.emptyCart p{
	margin: 0.1rem 0;
    font-size: 0.14rem;
    color: #D5BFA7;
    text-align: center;
}
.emptyCart h5{
	width: 1.2rem;
    margin: 0 auto;
    display: block;
    text-align: center;
    font-size: 0.12rem;
}
.cart-pro-list{
	font-size: 0.12rem;
	color: #442818;
}
.cart-top-tip{
	height: 0.38rem;
    line-height: 0.35rem;
    text-align: center;
    font-size: 0.12rem;
    color: #442818;
}
.place-order-bottom {
    height: 0.44rem;
    overflow: hidden;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100000;
    box-shadow: 0 -0.02rem 0.04rem 0 rgba(0,0,0,0.10);
}
.place-order-bottom .order-delete-but {
    display: block;
    float: left;
    height:0.44rem;
    width: 0.44rem;
    background: url(../../static/assets/delect-min.png) no-repeat center center;
    background-size: 0.14rem auto;
}
.place-order-bottom .place-order-but {
    display: block;
    float: right;
    height: 0.44rem;
    width:0.96rem;
    line-height: 0.44rem;
    text-align: center;
    color: #fff;
    background: #442818;
    font-size: 0.12rem;
}
.place-order-bottom .pay-money {
    float: right;
    margin-right: 0.12rem;
    color: #442818;
}
.place-order-bottom .pay-money>div {
    float: left;
    height: 0.44rem;
    text-align: right;
    font-size: 0.12rem;
}
.place-order-bottom .pay-money>div span:first-child {
    margin-top: 0.05rem;
    display: inline-block;
    font-size: 0.16rem;
    font-weight: bold;
    line-height:0.16rem;
}
.place-order-bottom .pay-money>div span:last-child {
    display: block;
    color: #707070;
    font-size: 0.1rem;
    line-height: 0.16rem;
}
.place-order-bottom .pay-money .pay-money-plus {
    line-height:0.24rem;
    margin: 0 0.08rem;
    font-size: 0.16rem;
}
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