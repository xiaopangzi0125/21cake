<template>
	<div class="pageBox">
		<img :src="intro[0].pic">
		<div>
			<img :src="int.url" v-for="int in intro">
		</div>
	</div>
</template>

<script>
	export default {
		name:"Intro",
		props:["intro"]
	}
</script>

<style>
.pageBox{
	padding-bottom: 0.8rem;
}
.pageBox img{
	width: 100%;
    display: block;
    margin: 0 auto
}
</style>