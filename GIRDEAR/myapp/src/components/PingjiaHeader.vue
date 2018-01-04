<template>
	<div id="header">
        <div class="h_left" id="backBtnCart" @click="back()"><img src="http://app.girdear.cn/mb/images/back.png"></div>
        <div class="h_center" id="h_logo">
            <span>评价列表</span>
        </div>
        <div class="h_right"></div>
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

<style scoped="">
	#header{
    width:100%;
    height:50px;
    font-family: "微软雅黑";
    background-color: white;
    position:absolute;
    position: fixed;
    top:0;
    left: 0;
    z-index: 999;
}
#header .h_left{
    position:absolute;
    left:10px;
    top:10px;
    width: 44px;
    height: 40px;
}
#header .h_left img{
    display:block;
    width:15px;
}
#header .h_center{
    width:100%;
    text-align: center;
    background-color: white;
    line-height: 50px;
    display: inline-block;
    color: #000;
    font-size: 18px;
    font-family: "微软雅黑";
}
#header .h_center img{
    display:block;
    position:absolute;
    left:50%;
}
#header .h_right{
  position:absolute;
  right:10px;
  top: 10px;
  height: 50px;
  line-height: 50px;
  color: #000;
  font-size: 16px;
}
#header .h_right img{
    width:28px;
}
</style>