<template>
	<div id="content" >
		<div id="form_Register" >
            <div class="r_count">
                <ul class="zhuce_ul1">
                    <li><span><input type="tel" v-on:blur="mobileNum()" placeholder="请输入手机号" v-model="mobile" name="mobile"></span><button v-model="yz" id="btnSendSms" class="cancel" @click="sendMsg(mobile)">{{yz}}</button></li>
                    <li style="border-bottom:0px;"><input type="text" placeholder="请输入验证码" v-model="verifyCode" name="verifyCode"></li>
                </ul>
                <ul style="margin-top:15px;" class="zhuce_ul1">
                    <li><input type="password" id="password" v-model="password" placeholder="设置密码" name="password"></li>
                    <li style="border-bottom:0px;"><input type="password"  placeholder="确认密码" v-model="confirmPassword" name="confirmPassword" v-on:blur="confirmPass()"></li>
                </ul>
                <p class="user">
                	<img id="img_agree" src="http://app.girdear.cn/mb/images/tongyi.png">
                	<i id="agreement">同意用户协议并注册</i>
                </p>
                <button class="btn-next" @click="register(mobile,password)">完成</button>
            </div>
        </div>
	</div>
</template>

<script>
import MyAjax from "@/md/MyAjax.js"
import { Toast  } from 'mint-ui';
export default{
	data(){
		return{
			mobile:"",
			password:"",
			confirmPassword:"",
			verifyCode:"",
			time:0,
			yz:"获取验证码"
		}
	},
	methods:{
		sendMsg(){
			var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
			if(this.mobile==""){
				Toast({
	              message: '请输入手机号',
	              position: 'bottom',
	              duration: 2000
	            });
			}else if(!reg.test(this.mobile)){
				Toast({
	              message: '请输入正确的手机号',
	              position: 'bottom',
	              duration: 2000
	            });
			}else{
				var that = this;
				var url = "http://girdear.cn/app/?callback=jQuery183028377161706387577_1512527720037&url=%2Fuser%2Fget_code&json=%7B%22mobile%22%3A%22"+this.mobile+"%22%7D&_=1512531350443"
				MyAjax.fetch(url,(data)=>{
					var status = data.map.status;
	                    if ( status.succeed == "1" ) {
	                   
	                        callback && callback( 100861 )
	                    }
				})
			}
		},
		//http://girdear.cn/app/?callback=jQuery183048239377833978536_1512538896444&url=%2Fuser%2Fget_password&json=%7B%22step%22%3A1%2C%22mobile%22%3A%2215011346159%22%7D&_=1512538904124
		register(mobile,password){
	        var that = this;
	        var registerUrl = "http://datainfo.duapp.com/shopdata/userinfo.php";
	        registerUrl += "?status=register&userID=" + mobile + "&password=" +password; 
	        
	        MyAjax.fetch(registerUrl,(data) => {
	          console.log(data)
	          if(data == "0"){
	            Toast({
	              message: '用户名重名',
	              position: 'bottom',
	              duration: 2000
	            });
	            setTimeout(() => {
	              that.mobile="";
	              that.password = "";
	              that.confirmPassword="";
	            },2000)
	          }else if(data == "1"){
	            this.$router.push("/login");
	          }else if(data == "2"){
	            setTimeout(() => {
	            that.mobile="";
	            that.password = "";
	            that.confirmPassword="";
	          },2000)
	          }
          
        })
      },
		confirmPass(){
			if(this.password!==this.confirmPassword){
				Toast({
	              message: '密码不一致',
	              position: 'bottom',
	              duration: 2000
	            });
	            setTimeout(() => {
	              this.confirmPassword="";
	              this.password = "";
	            },2000)
			}
		},
		mobileNum(){
			var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
			if(this.mobile==""){
				Toast({
	              message: '请输入手机号',
	              position: 'bottom',
	              duration: 2000
	            });
			}else if(!reg.test(this.mobile)){
				Toast({
	              message: '请输入正确的手机号',
	              position: 'bottom',
	              duration: 2000
	            });
			}
		}
	}
	
}
</script>

<style scoped="">
*{
   	font-size: 14px;
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    -webkit-tap-highlight-color: rgba(255,0,0,0)
} 
#content{
	background-color: rgba(0,0,0,0.1);
}
#form_Register{
	margin-top: 30px;
}
section.register{
    width:100%;
    height:100%;
    margin-top:50px;
}
.r_count{
    padding-top:30px;
}
.zhuce_ul1{
    width:94%;
    height:100px;
    background:#fff;
    border-radius: 3px;
    margin:0 auto;
}
.zhuce_ul1 li{
    width:94%;
    margin:0 auto;
    height:50px;
    line-height:49px;
    border-bottom:1px solid #d7d7d7;
}
.zhuce_ul1 li span > input{
    font-family: "微软雅黑";
}
.zhuce_ul1 li > input{
    width:100%;
    font-family: "微软雅黑";
}
.zhuce_ul1 li button{
    display:block;
    float:right;
    width:120px;
    height:30px;
    line-height:30px;
    font-family: "微软雅黑";
    font-style: normal;
    color:#F9004F;
    font-size: 14px;
    text-align: center;
    margin-top:11px;
    border-left:1px solid #d7d7d7;
    background-color: white;
}

.r_count .user{
    margin-top:15px;
    height:30px;
    margin-left: 20px;
}
.r_count .user img{
    display:block;
    float:left;
    width:20px;
    float:left;
}
.r_count .user i{
    display:block;
    float:left;
    color:#3c3c3c;
    font-family: "微软雅黑";
    font-size:14px;
    line-height:18px;
    font-style: normal;
}
.r_count button.btn-next{
    display:block;
    width:90%;
    margin:0 auto;
    height:45px;
    background:#F9004F;
    font-family: "微软雅黑";
    color:#fff;
    border-radius: 5px;
    margin-top: 20px;
}
</style>