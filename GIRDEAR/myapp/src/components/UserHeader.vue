<template>
	<div id="header" v-if = "isLogin">
	    <button id="logout" @click="logout()">退出</button>
	    <div class="h_center"><img src="http://app.girdear.cn/mb/images/mine_top.png"></div>
	    <div class="user_info">
	        <div class="user_pic">
	            <a href="#"><img id="my" src="http://app.girdear.cn/mb/images/ramkdef.png" alt="我的头像"></a>
	        </div>
	        <a href="javascript:void(0)" class="user_name" id="userName">{{userID}}</a>
	    </div>
	</div>
	<div id="header" v-else>
     	<div class="h_center"><img src="http://app.girdear.cn/mb/images/mine_top.png"></div>
	    <div class="user_info">
	        <div class="user_pic">
	            <a href="#"><img id="my" src="http://app.girdear.cn/mb/images/ramkdef.png" alt="我的头像"></a>
	        </div>
	       
	        <router-link to="/login" class="user_name" id="userName" >点击登录</router-link>
	    </div>
    </div>
</template>

<script>
export default{
	data(){
		return{
			userID:"",
			isLogin:false,
		}
	},
	mounted(){
      if(localStorage.getItem("userID")){
        this.isLogin = true;
        this.userID = localStorage.getItem("userID")
      }
    },
    methods:{
      logout(){
        localStorage.removeItem("userID");
        this.$router.push("/login")
      }
    }
}
</script>

<style scoped="" lang="scss">
#header{
	#logout{
		position: absolute;
		right: 0;
		bottom: -100px;
		border: 0;
		color: #fff;
		display: block;
		width: 50px;
		background: rgba(0,0,0,0.4);
		border-radius: 4px;
	}
	position:relative;
	.h_center{
		width: 100%; 
		height: 150px; 
		overflow: hidden; 
		min-width: 360px;
		img{width:100%;}
	}
	.user_info{
		height:1px;
		position:relative; 
		.user_pic{
			width:80px; 
			height:80px; 
			position:absolute; 
			left:50%; 
			top:-125px; 
			margin-left: -40px;
			a {
			    color:#444;
			    text-decoration:none;
			    img{
			    	width:100%; 
			    	height:100%; 
			    	position:absolute; 
			    	margin-top:-50%;top:50%;  
			    	border-radius: 100%; 
			    	border: 2px #ffffff solid;
			    }
			}
		}
	}
	#userName{
		color: #ffffff; 
		text-align: center; 
		width: 100%; 
		display: block; 
		position: absolute; 
		top: -32px;
	}
		
}
</style>