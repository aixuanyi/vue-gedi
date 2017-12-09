<template>
	<header id="header">
		<div class="h_left" @click="back()">
			<img src="http://app.girdear.cn/mb/images/back.png"/>
		</div>
		<div class="h_center" id="header_title">秋冬新品</div>
		<div id="btnSearch" class="h_right btnSearch">
			<img src="http://app.girdear.cn/mb/images/sousuo.png">
		</div>
	</header>
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
.h_left{
    position:absolute;
    left:10px;
    top:10px;
    width: 44px;
    height: 40px;
    img{
    	display:block;
    	width:15px;
    }
}
.h_center{
    width:100%;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    color: #000;
    font-size: 18px;
    font-family: "微软雅黑";
}
.h_right{
  position:absolute;
  right:10px;
  top: 10px;
  height: 50px;
  line-height: 30px;
  color: #000;
  font-size: 16px;
  img{
  	width:28px;
  }
}
</style>