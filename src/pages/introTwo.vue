<template>
	<div class="content-box">
		<Intro :intro="introlist"></Intro>
		<Footer/>
	</div>
</template>

<script>
const Intro = r => require.ensure([], () => r(require('@/components/intro.vue')), 'Intro')
const Footer = r => require.ensure([], () => r(require('@/components/footer.vue')), 'Footer')

export default {
	name:"IntroTwo",
	data(){
		return{
			introlist:[
				{pic:"static/assets/classic_01.jpg"},
				{url:"static/assets/classic_02-1.jpg"},
				{url:"static/assets/classic_03-1.jpg"},
				{url:"static/assets/classic_04-1.jpg"},
				{url:"static/assets/classic_05-10.jpg"}
			]
		}
	},
	components:{
		"Intro":Intro,
		"Footer":Footer
	}
}
</script>

<style scoped>
.content-box{
	background: white;
	position: relative;
	top:0.48rem
}
</style>