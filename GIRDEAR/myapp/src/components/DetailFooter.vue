<template>
	<article class="btn_fix">
        <div id="qq_service" class="btf_an1">
            <img src="http://app.girdear.cn/mb/images/img2017/LOGO3334.png">
        </div>
        <router-link class="btf_an1" to="/home">
            <img src="http://app.girdear.cn/mb/images/img2017/LOGO3111.png">
        </router-link>
        <router-link class="btf_an1" style="border: none;" to="/user">
            <img src="http://app.girdear.cn/mb/images/img2017/LOGO3222.png">
        </router-link>
        <div class="btf_an3" id="btn_shop_now">
            <span>立即购买</span>
        </div>
        <div class="btf_an2" id="btn_addshop" >
            <span>加入购物车</span>
        </div>
    </article>
</template>

<script>
</script>

<style lang="scss" scoped="">
.btn_fix {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    border-top: 1px #D1B587 solid;
    background-color: white;
    .btf_an1{
    	width: 15%; 
    	height: 50px; 
    	display: block; 
    	position: relative; 
    	float: left; 
    	border-right: 1px #ADADAD solid; 
    	background: #FFFFFF;
    	img{
    		width: 50px; 
			height: 50px; 
			display: block; 
			position: absolute; 
			left: 50%; 
			margin-left: -25px;
    	}
    }
	
	.btf_an2{
		width: 28%; 
		height: 50px; 
		display: block; 
		position: relative; 
		float: right; 
		background:#ec1e70; 
		color: white; 
		line-height: 50px; 
		font-size: 12px; 
		text-align: center;
	}
	.btf_an3{
		width: 25%; 
		height: 50px; 
		display: block; 
		position: relative; 
		float: right; 
		background:#2a2018; 
		color: white; 
		line-height: 50px; 
		font-size: 20px; 
		text-align: center;
		span{
			font-size: 12px;
		}
	}

}
</style>