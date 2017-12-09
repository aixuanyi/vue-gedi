<template>
	<div id="header">
        <div class="h_left" id="backBtn" @click="back()"><img src="http://app.girdear.cn/mb/images/back.png"></div>
        <div class="h_center">注册</div>
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

<style lang="scss" scoped="">

#header .h_left{
    position:absolute;
    left:10px;
    top:10px;
}
#header .h_left a{
    display:block;
    width:60px;
}
#header .h_left img{
    display:block;
    width:15px;
}
#header .h_center{
    width:100%;
    text-align: center;
    line-height: 50px;
    display: inline-block;
    color: #fff;
     background: gray;
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
    top:10px;
}

#header .h_right img{
    width:28px;
}
#header .h_qk{
    position:absolute;
    right:10px;
    top:16px;
}

#header .h_qk img{
    width:28px;
}

</style>