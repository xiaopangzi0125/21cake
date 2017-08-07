<template>
	<div class="list">
		<Navlist></Navlist>
		<div class="list-box">
			<Product :list='shoplist'/>
		</div>
		<Footer/>
	</div>
</template>

<script>
const Navlist = r => require.ensure([], () => r(require('@/components/navlist.vue')), 'Navlist')
const Product = r => require.ensure([], () => r(require('@/components/product.vue')), 'Product')
const Footer = r => require.ensure([], () => r(require('@/components/footer.vue')), 'Footer')

export default {
	name:"List",
	data(){
		return {shoplist:[]}
	},
	mounted(){
		this.$http.get('api/').then(function(response){
          //url地址api就是http://localhost:8090/
          
		  this.shoplist=JSON.parse(response.bodyText)
//		  console.log(JSON.parse(response.bodyText))
	    });

	},
	components:{
		"Navlist":Navlist,
		"Product":Product,
		"Footer":Footer
	}
}
</script>

<style scoped>
.list{
	position: relative;
	top: 0.48rem;
	background: #f1f1f1;
}
.list-box {
	width: 100%;
	margin-bottom: 0.48rem;
    position: relative;
    top: 0.4rem;
    /*padding-right: 0.2rem;*/
    background: #FFFFFF;
}	

</style>