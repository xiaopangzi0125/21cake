<template>
	<ul class="cart-pro-list">
		<li v-for="pro in cartlist">
			<Cartcont :list='pro' @add="add(index)"></Cartcont>
		</li>
	</ul>
</template>

<script>
const Cartcont = r => require.ensure([], () => r(require('@/components/cartContent.vue')), 'Cartcont')		

export default {
	name:"Cartprod",
	props:["cartlist"],
	data(){
		return{ 
			total:0
		}
	},
	components:{
		'Cartcont':Cartcont
	},
	methods:{
		add(priceOne){
			console.log(priceOne);
			
				this.total=0;
				this.total += priceOne
				var totals = this.total
				this.$emit("add",totals)
				console.log(this.cartlist[0].length,this.cartlist)
			
		}
	}
}
</script>

<style scoped>
.cart-pro-list{
	font-size: 0.12rem;
	color: #442818;
}


</style>