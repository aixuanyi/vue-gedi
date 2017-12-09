<template>
	<header>
		<div class="h_left" id="backBtn" @click="back()"><img src="http://app.girdear.cn/mb/images/back.png"></div>
		<p class="g_car">
        	<img class="addshop" src="http://app.girdear.cn/mb/images/g_car.png">
        </p>
        <em id="goodsCount">0</em>	
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

<style scoped="" >
header{
    width: 100%;
    height: 50px;
    position: absolute;
    top: 15px;
    z-index: 100;
    
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
.g_car{
    width: 50px;
    height: 50px;
    float: right;
    margin-right: 15px;
}
.addshop{
	display: block;
    width: 100%;
}
#goodsCount{
    display: block;
    width: 28px;
    height: 31px;
    background: url(http://app.girdear.cn/mb/images/add_num.png);
    text-align: center;
    line-height: 31px;
    font-style: normal;
    font-size: 14px;
    clear: both;
    position: absolute;
    right: 15px;
    top: -11px;
    color:white;
}
</style>