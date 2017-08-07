<template>
	<div class="birthday-area">
		<ul class="birthday-area-list">
			<li v-for="pro in prods">
				<div class="picbox">
					<h3><span>{{pro.cname}}</span></h3>
					<h5 style="transform-origin: -17px 10px 0px;">
						<span>{{pro.ename}}</span>
					</h5>
					<img :src="pro.img">
				</div>
				<div class="match">
					<div class="content-list">
						<h4>搭配组合</h4>
						<ul>
							<li v-for="item in items">
								<div><img :src="item.url"></div>
								<p>
									<label>
										<input type="checkbox">
										<span>￥{{item.price}}</span>
									</label>
								</p>
							</li>
						</ul>
					</div>
					<div class="matchPrice">
						<p>组合价：￥<span>{{pro.vals}}</span>-<span>{{pro.valb}}</span></p>
						<div><img src="static/assets/list-cart.png"></div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name:"Prodselect",
	props:["prods"],
	data(){
		return {
			items:[
				{url:"static/assets/l1.jpg",
				 price:45},
				{url:"static/assets/l2.jpg",
				 price:45},
				{url:"static/assets/l3.jpg",
				 price:65},
				{url:"static/assets/l4.jpg",
				 price:100}
			]
		}
	}
}
</script>

<style scoped>
.birthday-area,.birthday-area-list{
	width: 100%;
    font-size: 0.12rem;
    color: #442818;
}
.birthday-area-list>li{
	background: #fff;
    margin-top: 0.15rem;
}
.picbox{
	width: 100%;
	overflow: hidden;
    height: 2.4rem;
    position: relative;
}
.birthday-area-list>li>.picbox>h3{
	width: 0.2rem;
    float: left;
    word-wrap: break-word;
    padding-top: 0.25rem;
    margin-left: 0.3rem;
}
.birthday-area-list>li>.picbox>h3 span{
	float: left;
    writing-mode: tb-rl;
    font-size: 0.18rem;
    line-height: 0.2rem;
}
.birthday-area-list>li>.picbox>h5{
	padding-top: 0;
    margin-left: 0.4rem;
    width: auto;
    transform: rotate(90deg);
    word-wrap: break-word;
    float: left;
}
.birthday-area-list>li>.picbox>h5 span{
    font-size: 0.18rem;
    max-width: 1.8rem;
    line-height: 0.2rem;
}
.birthday-area-list>li>.picbox img {
    display: block;
    width: 60%;
    position: absolute;
    right: 5%;
    top: 0;
}
.match{
	margin-left:0.2rem;
}
.content-list {
    border-top: 0.01rem solid #E9E9E9;
}
.match h4 {
    font-size: 0.13rem;
    line-height: 0.3rem;
    margin-top: 0.06rem;
}
.content-list ul {
    overflow: hidden;
    padding-bottom: 0.25rem;
}
.content-list ul li {
    float: left;
    width: 22%;
    margin-left: 3%;
}
.content-list ul li:first-child {
    margin-left: 0;
}
.content-list ul li img {
    width: 90%;
    margin-left: 5%;
}
.content-list ul li p {
    text-align: center;
}
.matchPrice{
	border-top: 0.01rem solid #E9E9E9;
    border-bottom: 0.01rem solid #E9E9E9;
    height: 0.56rem;
    line-height:0.56rem;
    padding-right:0.25rem;
}
.matchPrice p{
	width: 60%;
    float: left;
}
.matchPrice img{
	height: 0.25rem;
    width: 0.25rem;
    float: right;
    margin-top: 0.1rem;
    display: block;
}
</style>