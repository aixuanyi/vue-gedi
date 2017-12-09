<template>
	<div id="header">
		<header>
			<div class="h_left" id="bntBack" @click="back()">
		        <img src="http://app.girdear.cn/mb/images/back.png"/>
		        </div>
		        <div class="h_center">登录</div>
		    <div id="login2" class="h_right">短信验证登录</div>
    	</header>
	</div>
</template>

<script>
	export default{
		methods:{
			back(){
				history.back()
			}
		}
	}
</script>

<style lang="scss" scoped="">
body,html{height:100%;}
ul, dl, dd, h1, h2, h3, h4, h5, h6, form, p {
    padding:0;
    margin:0;
}
header{
    width:100%;
    height:50px;
    font-family: "微软雅黑";
    background: rgba(238, 238, 238, 0);
    position:absolute;
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
}
header .h_left{
    position:absolute;
    left:10px;
    top:10px;
}
header .h_left a{
    display:block;
    width:60px;
}
header .h_left img{
    display:block;
    width:15px;
}
header .h_center{
    width:100%;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    color: #000;
    font-size: 18px;
    font-family: "微软雅黑";
}
header .h_center img{
    display:block;
    position:absolute;
    left:50%;
}
header .h_right img{
    width:28px;
}
header .h_qk{
    position:absolute;
    right:10px;
    top:16px;
}

header .h_qk img{
    width:28px;
}
header .h_right{
  position:absolute;
  right:10px;
  top: 10px;
  height: 50px;
  line-height: 50px;
  color: #000;
  font-size: 16px;
}
header .h_right img{
    width:28px;
}
</style>