<template>
  <div class="hello">
  		<div class="swiper-container">
	  		<div class="swiper-wrapper" @click="skip">
	        <div class="swiper-slide">
	          <img src="static/assets/pic1.jpg">
	        </div>
	        <div class="swiper-slide">
	          <img src="static/assets/pic2.jpg">
	        </div>
	        <div class="swiper-slide">
	          <img src="static/assets/pic3.jpg">
	        </div>
	        <div class="swiper-slide">
	          <img src="static/assets/pic4.jpg">
	        </div>
	      </div>
        <div class="swiper-pagination"></div>
      </div>
      
      <div class="home-menu">
      	<ul class="home-list">
      		<li>
      			<router-link to="recommend"><img src="static/assets/home-icon1.jpg">
      			<span>推荐</span></router-link>
      		</li>
      		<li>
      			<router-link to="recommend"><img src="static/assets/home-birthday.jpg">
      			<span>生日专区</span></router-link>
      		</li>
      		<li>
      			<router-link to="list"><img src="static/assets/home-cake.png">
      			<span>蛋糕</span></router-link>
      		</li>
      		<li>
      			<router-link to="list"><img src="static/assets/home-ice.png">
      			<span>冰淇淋</span></router-link>
      		</li>
      		<li>
      			<router-link to="list"><img src="static/assets/home-gift.png">
      			<span>设计师礼品</span></router-link>
      		</li>
      	</ul>
      </div>
      
      <div class="bannerBox">
      	<ul>
      		<li><router-link to="IntroOne"><img src="static/assets/banner1.jpg" alt="应季明星"></router-link></li>
      		<li><router-link to="IntroTwo"><img src="static/assets/banner2.jpg" alt="经典直选"></router-link></li>
      		<li><img src="static/assets/banner3.jpg" alt="食材口味"></li>
      		<li><img src="static/assets/banner4.jpg" alt="食材之旅"></li>
      		<li><img src="static/assets/banner5.jpg" alt="设计师款"></li>
      	</ul>
      </div>
      
      <Footer/>
  </div>
</template>

<script>
const Footer = r => require.ensure([], () => r(require('@/components/footer.vue')), 'Footer')
	
export default {
  name: 'Index',
  mounted(){
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: 3000,
      loop : true,
      pagination : '.swiper-pagination',
      paginationType : 'bullets',
      autoplayDisableOnInteraction : false,
    });
  },
  components:{
  	"Footer":Footer
  },
  methods:{
    skip(){
    	this.$router.push({path:'detail'})
    }
  	
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	a{
		text-decoration: none;
	}
	.hello{
		width: 100%;
	}
	.swiper-container{
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
		top: 0.48rem;
	}
	.swiper-container img{
		width: 100%;
	}
	.home-menu {
    width: 100%;
    overflow: hidden;
    font-size: 0.12rem;
    margin-top: 0.12rem;
	}
	.home-menu .home-list{
		width: 100%;
		height: 0.9rem;
		display: flex;
		justify-content: space-between;
	}
	.home-menu .home-list li{
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		width: 20%;
		height: 0.9rem;
	}
	.home-menu .home-list li img{
		width: 60%;
    display: block;
    margin: 0 auto;
    max-height: 100%;
	}
	.home-menu .home-list li span{
		display: block;
    width: 100%;
    text-align: center;
    color: #442818;
	}
	.bannerBox li{
		width: 100%;
		max-height: 2rem;
    overflow: hidden;
    padding:0.02rem 0;
	}
	.bannerBox li img{
		width: 100%;
    display: block;
	}
</style>
