<template>
	<div class="recomBox">
		<div class="topbanner">
			<img :src="url">
		</div>
		<Prodselect :prods="prolist"></Prodselect>
		<Footer/>
	</div>
</template>

<script>
const Prodselect = r => require.ensure([], () => r(require('@/components/prodselect.vue')), 'Prodselect')
const Footer = r => require.ensure([], () => r(require('@/components/footer.vue')), 'Footer')

export default {
	name:"Recommend",
	data(){
		return {
			url:"static/assets/banner.jpg",
			prolist:[
				{cname:"花格",
				 ename:"Fruit Pocket",
				 img:"http://static.21cake.com//upload/images/2dd80e91a481dd7ab6a18c2d013718c5.jpg",
				 vals:343.00,
				 valb:795.00
				},
				{cname:"芒果慕斯",
				 ename:"Mango Jerry ",
				 img:"http://static.21cake.com//upload/images/c418d470a166128ac8f915e121bfa493.jpg",
				 vals:298.00,
				 valb:750.00
				},
				{cname:"摩卡",
				 ename:"Café Mocha",
				 img:"http://static.21cake.com//upload/images/505c71f60ac4b3d96744a6bb54d63cb1.jpg",
				 vals:398.00,
				 valb:958.00
				},
				{cname:"新卡",
				 ename:"Cappuccino In Mind",
				 img:"http://static.21cake.com//upload/images/327595e905e1fb3385478b4b6d2253fc.jpg",
				 vals:398.00,
				 valb:985.00
				}
			]
		}
	},
	components:{
		"Prodselect":Prodselect,
		"Footer":Footer
	}
}
</script>

<style scoped>
.recomBox{
	width: 100%;
	margin: 0 auto;
	position: relative;
	top: 0.48rem;
	/*margin-bottom: 0.5rem;*/
	background: #f6f6f6;
}	
.topbanner img{
	width: 100%;
	display: block;
}
</style>