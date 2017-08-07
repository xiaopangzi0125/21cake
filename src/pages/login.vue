<template>
	<div class="loginContainer">
		<div class="login-box">
			<div class="login-title">
				<p :class="{active:chooseLg}" @click="change">帐号密码登录</p>
				<p :class="{active:!chooseLg}" @click="change">手机验证码登录</p>
			</div>
			
			<div id="login-form-group">
				<form method="post">
					
					<!--账号密码登录-->
					<ul class="input-list" v-if="chooseLg">
						<li><input type="text" placeholder="用户名/邮箱地址" id="phoneName"></li>
						<li><input type="password" v-model="pwd"  @blur="getPwd()" placeholder="填写密码" maxlength="32"></li>
						<li class="err-text"><span v-if="showErr">账户不存在</span></li>
					</ul>
					
					<!--手机验证码登录-->
					<ul class="input-list" v-if="!chooseLg">
						<li><input type="tel" v-model="tel" @blur="getPho()" placeholder="手机号" id="phoneName"></li>
						<li class="half">
							<input type="text" placeholder="请输入图片字符">
							<img class="imgreg" src="https://passport.lagou.com/vcode/create?from=register&refresh=1500347800472">
							<span><img class="refresh" src="http://static.21cake.com//themes/wap/img/renovate.png"></span>
						</li>
						<li class="half">
							<input type="text" placeholder="短信验证码">
							<button id="regiGetCode">发送验证码</button>
						</li>
						<li class="err-text"><span  v-if="showErr">请输入正确的手机号码</span></li>
					</ul>
					
					<div class="sub" @click="sucssLg">登录</div>
				</form>
			</div>
			
			<div class="remember-me">
				<input type="checkbox">记住账号
				<span><router-link to="register">去注册</router-link></span>
				<span>忘记密码</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name:"Login",
	data(){
		return {
			chooseLg:true,
			tel:"",
			pwd:"",
			showErr:0
		}
	},
	mounted(){
		if(localStorage.getItem("username")){
			var user = localStorage.getItem("username")
			this.tel = user;
			console.log(this.tel)
		}
	},
	methods:{
		change(){
			this.chooseLg = !this.chooseLg
//			console.log(this.chooseLg)
		},
		getPho(){  //电话号码验证
			let reg = /^1[34578]\d{9}$/;
			if(!reg.test(this.tel) || !this.tel){
				this.showErr = 1
			}else{
				this.showErr = 0
			}
//			console.log(this.tel)
		},
		getPwd(){  //密码格式验证，用户是否存在
			let reg = /^[a-zA-Z]\w{5,17}$/;
			if(!reg.test(this.pwd)){
				this.showErr = 1
			}else{
				this.showErr = 0
			}
		},
		sucssLg(){ //登陆跳转
			let reg = /^[a-zA-Z]\w{5,17}$/;
			var user = localStorage.getItem("username");
			if(user == this.tel || reg.test(this.pwd) && this.tel !==null){
				this.$router.push({path:"index"})
			}else{
				this.showErr = 1
			}
		}
	}
	
	
}
</script>

<style scoped>
a{
	text-decoration: none;
	color: #744F3A;
}
::-webkit-input-placeholder { /* WebKit browsers */  
    color: #d8c4ae;  
} 
.loginContainer{
    padding: 0 0.28rem;
    position: relative;
    top: 0.48rem;
    min-height: 6rem;
}
.login-box{
	position: relative;
	top: 0.15rem;
}
.login-title{
	overflow: hidden;
    width: 100%;
    border-bottom: 0.01rem solid #D5D5D5;
}
.login-title p{
	width: 50%;
    float: left;
    padding: 0.08rem 0;
    line-height: 0.2rem;
    text-align: center;
    font-size: 0.14rem;
    color: #969696;
}
.active {
    color: #333;
    border-bottom: 0.01rem solid #442818;
}
#login-form-group{
	transform-origin: 0px 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
}
.input-list {
    margin-top: 0.25rem;
    font-size: 0.14rem;
}
.input-list li {
    width: 100%;
    height:0.47rem;
    line-height: 0.46rem;
}
.input-list li input{
	width: 100%;
    border: none;
    border-bottom: 0.01rem solid #D5D5D5;
    height: 0.26rem;
    padding: 0.1rem 0;
    line-height: 0.26rem;
    outline: none;
    font-size: 0.14rem;
}
.sub{
	width: 100%;
    height: 0.42rem;
    line-height: 0.42rem;
    background: #442818;
    color: #fff;
    font-size: 0.14rem;
    text-align: center;
}
.remember-me{
    margin-top: 0.25rem;
    height: 0.18rem;
    overflow: hidden;
    font-size: 0.12rem;
    color: #744F3A;
}
.remember-me input{
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.05rem;
    height: 0.16rem;
    width: 0.16rem;
    border: 0.01rem solid #D5D5D5;
}
.remember-me span {
    display: inline-block;
    float: right;
    margin-left: 0.18rem;
    line-height:0.18rem;
}
.input-list .half input{
	width: 50%;
	float: left;
}
.imgreg{
	display: block;
    width: 35%;
    margin-left: 3%;
    height: 0.36rem;
    float: left;
    margin-top: 0.09rem;
    border: 0.01rem solid #D5D5D5;
}
.refresh{
	border: none;
    vertical-align: middle;
    margin-top: 0.1rem;
    max-width: 85%;
    max-height: 40%;
    margin-left: 0.1rem;
}
button{
	display: block;
    width: 47%;
    font-size: 0.14rem;
    text-align: center;
    line-height: 0.38rem;
    height: 0.38rem;
    margin-top: 0.04rem; 
    float: left;
    background: #442818;
    color: #fff;
    border: none;
    outline: none;
}
.err-text{
	font-size: 0.12rem;
    color: #442818;
}
</style>