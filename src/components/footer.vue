<template>
	<div class="footerbox">
		<ul>
			<li>下载App</li>
			<li>联系我们</li>
			<li>全站公告</li>
		</ul>
		<p>
			Copyright© 21Cake蛋糕官网商城 2007-2017,
			<br>
			版权所有京ICP备14006254号-1 
			<br>
			网站注册公司名称: 北京廿一客食品有限公司
		</p>
    </div>
</template>

<script>
	export default {name:"Footer"}
</script>

<style scoped>
.footerbox{
	font-size: 0.12rem;
	color: #979797;
	background: #414141;
    padding: 0.30rem 0.10rem;
}
.footerbox ul{
	padding-left: 2.5%;
}
.footerbox li{
	width: 25%;
    margin-left: 4%;
    margin-bottom: 0.23rem;
	height: 0.30rem;
	border: 0.01rem solid #979797;
	line-height: 0.30rem;
	text-align: center;
	display: inline-block;
}
.footerbox p{
	text-align: center;
    color: #a0a0a0;
    line-height: 0.16rem;
}
</style>