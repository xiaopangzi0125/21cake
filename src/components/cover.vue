<template>
	<div class="coverBox">
		<i @click="isFade" ></i>
		<div class="bombBox">
			<div class="bombIntro">
				<div class="home-select-city">
					<p class="home-select-title">选择城市</p>
					<ul @click="choose">
						<li v-for="(item,index) in items" @click="change(index)" :class="{active:index===num}">{{item.prev}}</li>
					</ul>
					<div class="btn" @click.stop="submits">确定</div>
					<p class="select-text">*切换城市将清空购物车</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Cover",
		props: ['isFade'],
		data(){
			return{
				city:"北京",
				num:0,
				items:[
					{prev:"北京"},
					{prev:"上海"},
					{prev:"杭州"},
					{prev:"天津"},
					{prev:"无锡"},
					{prev:"苏州"},
					{prev:"广州"},
					{prev:"深圳"}
				]
			}
		},
		methods:{
			change(index){
				this.num = index
			},
			choose(e){
				var src = e.target.innerHTML;
				this.city = src;
//				console.log(this.city)
			},
			submits(){
				var cities = this.city;
				this.$emit("submits",cities)
				this.isFade()
			}
		}
	}
</script>

<style scoped>
.coverBox{
	position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.coverBox>i{
	position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .5);
    z-index: 10000;
}
.bombBox{
	position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    z-index: 10001;
    margin-top:-1.24rem;
}
.bombIntro{
	margin: 0 0.14rem;
    background: #fff;
    min-height: 2.48rem;
}
.home-select-city{
	border-top: 0.03rem solid #442818;
    overflow: hidden;
}
.home-select-title{
	line-height: 0.25rem;
    font-size: 0.18rem;
    padding-top: 0.25rem;
    padding-left: 0.14rem;
    color: #442818; 
}
.home-select-city>ul{
	overflow: hidden;
    margin-top: 0.3rem;
}
.home-select-city>ul li{
	float: left;
    width: 22%;
    margin: 1.5%;
    background: #f7f7f7;
    font-size: 0.12rem;
    height: 0.32rem;
    line-height: 0.32rem;
    text-align: center;
}
.active{
	border: 0.01rem #442818 solid;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    background: #fff url(../../static/assets/icon_selected.png) no-repeat top left !important;
    background-size: 0.12rem!important;
}
.btn{
	background: #442818;
    height: 0.35rem;
    line-height: 0.35rem;
    text-align: center;
    color: #fff;
    font-size: 0.15rem;
    width: 1.28rem;
    margin: 0.3rem 0 0.1rem 1.1rem;
    border: none;
}
.select-text{
	line-height: 0.18rem;
    color: #D5BFA7;
    text-align: center;
    padding-bottom: 0.35rem;
    font-size: 0.12rem;
}
</style>