<template>
	<div class="regBox">
		<div class="register-box">
			<div class="register-title">
				<h2>用户注册</h2>
			</div>
			<form>
				<ul class="input-list">
					<li><input type="text" v-model="tel" @blur="getPho()" placeholder="输入手机号"></li>
					<li><input type="password"  v-model="pwd"  @blur="getPwd()" placeholder="密码：8～20字符，需同时包含英文和数字"></li>
					<li><input type="password"  v-model="gainPwd"  @blur="getGainpwd()" placeholder="确认密码"></li>
					<li class="half">
						<input type="text" placeholder="请输入图片字符">
						<img class="imgreg" src="https://passport.lagou.com/vcode/create?from=register&refresh=1500347800472">
						<span><img class="refresh" src="http://static.21cake.com//themes/wap/img/renovate.png"></span>
					</li>
					<li class="half">
						<input type="text" placeholder="短信验证码">
						<button id="regiGetCode">发送验证码</button>
					</li>
					<li class="err-text">
						<span v-if="showErro">请输入正确的手机号码</span>
						<span v-if="showErrt">两次输入密码不一致</span>
						<span v-if="showErrp">密码：8～20字符，需同时包含英文和数字</span>
					</li>
				</ul>
				<div class="regBtn" @click="goLogin">注册</div>
				<div class="register-remember">
					<label><input type="checkbox">已阅读并同意</label>
					<span>21客会员协议</span>和
					<span>隐私保护政策</span>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name:"Register",
	data(){
		return{
			tel:"",
			pwd:"",
			gainPwd:"",
			showErro:0,
			showErrp:0,
			showErrt:0
		}
	},
	methods:{
		getPho(){  //电话号码验证
			var reg1 = /^1[34578]\d{9}$/;
			if(!reg1.test(this.tel) || !this.tel){
				this.showErro = 1
				this.showErrp = 0
			}else{
				this.showErro = 0
			}
			console.log(this.tel)
		},
		getPwd(){  //密码格式验证 
			var reg2 = /^[a-zA-Z]\w{5,17}$/;
			if(!reg2.test(this.pwd)){
				this.showErrp = 1
				this.showErro = 0
			}else{
				this.showErrp = 0
			}
		},
		getGainpwd(){ //验证两次密码
			if(this.pwd !== this.gainPwd){
				this.showErrt = 1
				this.showErrp = 0
			}else{
				this.showErrt = 0
			}
		},
		goLogin(){  //保存正确注册信息，跳转登录
			var reg1 = /^1[34578]\d{9}$/,reg2 = /^[a-zA-Z]\w{5,17}$/;
			if(reg1.test(this.tel) && reg2.test(this.pwd) && this.gainPwd===this.pwd){
				var user = this.tel;
				var a = localStorage.setItem("username",user);
				this.$router.push({path:"login"})
//				console.log(user)
				
			}
		}
	}
}
</script>

<style scoped>
::-webkit-input-placeholder { /* WebKit browsers */  
    color: #d8c4ae;  
}  
.regBox{
	position: relative;
	top: 0.48rem;
    padding: 0 0.28rem;
}
.register-box{
	position: relative;
	top: 0.15rem;
}
.register-title h2{
	font-size: 0.15rem;
    color: #442818;
    text-align: center;
}
.input-list{
	margin-top:0.25rem;
    font-size:0.14rem;
}
.input-list li {
    width: 100%;
    height: 0.47rem;
    line-height:0.46rem;
    position: relative;
    border-bottom: 1px solid #D5D5D5;
}
.input-list li input {
    width: 100%;
    border: none;
    border-bottom: 0.01rem solid #D5D5D5;
    height: 0.26rem;
    padding: 0.1rem 0;
    line-height: 0.26rem;
    outline: none;
    font-size: 14px;
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
.regBtn{
	width: 100%;
    height: 0.42rem;
    line-height: 0.42rem;
    background: #442818;
    color: #fff;
    font-size: 0.14rem;
    text-align: center;
}
.register-remember{
	margin-top: 0.25rem;
    height: 0.18rem;
    overflow: hidden;
    font-size: 0.12rem;
    color: #744F3A;
}
.register-remember input {
    display: inline-block;
    vertical-align: middle;
    margin-right:0.05rem;
    height: 0.16rem;
    width: 0.16rem;
    border: 0.01rem solid #D5D5D5;
}
.register-remember span{
    color: #2a99fa;
}
.err-text span{
	color: #FF714D;
    line-height: 0.18rem;
}
</style>