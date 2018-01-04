<template>
	<div id="content">
		<section class="login">
        <div style="height:50px;"></div>
        <ul class="denglu_ul">
            <li>
            	<span>用户名</span>
            	 <input id="phoneNum" type="text" v-model="mobile" placeholder="手机号或邮箱" name="">
            </li>
            <li style="border-bottom:0">
            	<span>密码</span>
            	<input id="password" type="password" v-model="password" placeholder="请输入登录密码" name="">
            </li>
        </ul>
        <button id="login" @click="login(mobile,password)">登录</button>
        <em id="register" style="float: left;padding-left: 5%;"><router-link to="/regist">快速注册</router-link></em> <em id="forget">忘记密码？</em> 
        <div style="height:50px;"></div>

    </section>
	</div>
</template>

<script>
import MyAjax from "@/md/MyAjax.js"
import { Toast  } from 'mint-ui';
export default{
	data(){
		return{
			mobile:"",
			password:""
		}
	},
	methods:{
		login(mobile,password){
		    var that = this;
		    var loginUrl = "http://datainfo.duapp.com/shopdata/userinfo.php";
		    loginUrl += "?status=login&userID=" + mobile + "&password=" +password; 
		    
		    MyAjax.fetch(loginUrl,(data) => {
		      if(data == "0"){
		      	Toast({
	              message: '用户名不存在',
	              position: 'bottom',
	              duration: 2000
	            });
		        setTimeout(() => {
		        	that.mobile="";
		        	that.password="";
		        },2000)
		      }else if(data == "2"){
		      	Toast({
	              message: '用户名或密码不正确',
	              position: 'bottom',
	              duration: 2000
	            });
		        setTimeout(() => {
		        	that.mobile="";
		        	that.password="";
		        },2000)
		      }else{
		        console.log(data)
		        localStorage.setItem("userID",data.userID)
		        that.$router.push("/user")
		      }
		      
		    })
		  }
	}
}
</script>

<style lang="scss" scoped=""> 
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
.denglu_ul{
    width:92%;
    height:100px;
    background:#fff;
    border-radius:5px;
    margin:0 auto;
    padding: 0;
	li{
		width:94%;
	    margin:0 auto;
	    height:51px;
	    line-height:49px;
	    border-bottom:1px solid #d7d7d7;
	    span{
	    	font-size: 12px;
		    display: block;
		    width: 50px;
		    height: 24px;
		    line-height: 30px;
		    float: left;
		    border-right: 1px solid #d7d7d7;
		    margin-top: 10px;
		    margin-top: 11px;
		    padding-left: 5px;
	    }
	    input{
    	    display:block;
		    float:left;
		    margin-left:10px;
		    line-height:49px;
		    height: 49px;
		    font-family: "微软雅黑";
	    }
	}
}

#login{
    display:block;
    width:90%;
    margin:0 auto;
    height:45px;
    background:#F9004F;
    font-family: "微软雅黑";
    color:#fff;
    border-radius: 5px;
    margin-top:20px;
}
.login em{
    display:block;
    float:right;
    font-style:normal;
    color:#3d3d3d;
    font-family: "微软雅黑";
    font-size:14px;
    line-height:30px;
    padding-right:4%;
}
.login p{
    width:92%;
    height:50px;
    background:#fff;
    clear:both;
    margin:0 auto;
}
.login p span{
    line-height:50px;
    color:#3c3c3c;
    font-family: "微软雅黑";
}
.login p span img{
    display:block;
    float:left;
    width:30px;
    padding-top:10px;
    padding-left:10px;
}
.login p em{
    display:block;
    float-right:0px;
    padding-top:16px;
}
</style>