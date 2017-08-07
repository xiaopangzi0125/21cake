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
	name:"IntroOne",
	data(){
		return{
			introlist:[
				{pic:"static/assets/i1.jpg"},
				{url:"static/assets/sart-m_02.jpg"},
				{url:"static/assets/sart-m_03.jpg"},
				{url:"static/assets/sart-m_04.jpg"},
				{url:"static/assets/sart-m_05.jpg"}
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