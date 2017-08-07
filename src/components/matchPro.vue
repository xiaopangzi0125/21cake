<template>
	<div class="candle-laid-list">
		<p class="cart-top-tip">· 搭配商品 ·</p>
		<dl v-for="mp in mlist">
			<dt>
				<img :src="mp.img">
			</dt>
			<dd>
				<h4>{{mp.name}}</h4>
				<span>￥{{mp.price}}</span>
			</dd>
			<dd class="cart-button-candle"><img src="../../static/assets/list-cart.png"></dd>
			<dd class="corner-cart-dd">
				<span class="corner-cart">配件</span>
			</dd>
		</dl>
	</div>
</template>

<script>
export default {
	name:"Matchpro",
	data(){
		return {
			mlist:[
				{img:"../../static/assets/m1.jpg",
			     name:"方形蜡烛",
			     price:5.00
				},
				{img:"../../static/assets/m2.jpg",
			     name:"餐具套餐",
			     price:0.50
				},
				{img:"../../static/assets/m1.jpg",
			     name:"方形蜡烛",
			     price:5.00
				},	
				{img:"../../static/assets/m2.jpg",
			     name:"餐具套餐",
			     price:0.50
				}
			]
		}
	}
}
</script>

<style>
.candle-laid-list {
    overflow: hidden;
    background: none;
    padding: 0;
}
.cart-top-tip {
    height: 0.38rem;
    line-height: 0.38rem;
    text-align: center;
    font-size: 0.12rem;
    color: #442818;
}
.candle-laid-list dl {
    width: 48.2%;
    background: #fff;
    margin-left: 1.2%;
    margin-bottom: 1.2%;
    float: left;
    position: relative;
    padding-bottom: 0.18rem;
}
.candle-laid-list dl dt {
    width: 100%;
}
.candle-laid-list dl dt img {
    display: block;
    width: 1.1rem;
    height: 1.21rem;
    margin: 0 auto;
}
.candle-laid-list dl dd {
    margin-left: 0.11rem;
    line-height: 0.15rem;
}
.candle-laid-list dl dd h4{
	font-size: 0.13rem;
    color: #442818;
}
.candle-laid-list dl dd span {
    font-size: 0.11rem;
    color: #969696;
    display: block;
    margin-top: 0.04rem;
    height: 0.14rem;
}
.cart-button-candle {
    position: absolute;
    right: 0.18rem;
    bottom: 0.18rem;
}
.cart-button-candle img {
    width: 0.18rem;
    height: 0.18rem;
}
.candle-laid-list dl dd.corner-cart-dd span {
    height: 0.3rem;
    color: #d9b27f;
    margin-top: 0;
    font-size: 0.12rem;
    left: -2.25%;
    display: block;
    padding-top: 0.02rem;
    width: 0.18rem;
    border: 1px solid #c79350;
    color: #d9b27f;
    position: absolute;
    margin-left: 20px;
    text-align: center;
    line-height: 14px;
    top: 0;
}
</style>