<template>
	<div id="content">
		<section class="con_main6" id="iScrollCart">
        <div id="scrollInner" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
            <div class="btn_wrap4">
                <div id="cartList">                    
                        <nav>
                            <div v-for="item in goodslist" class="q1">
                                <div class="select" style="display:none">
                                    
                                </div>
                                <img class="shop_pic" :src="item.img">

                                <div class="content">
                                    <div>
                                        <span class="content_span_top">{{item.goods_name.slice(0,4)}}  {{item.goods_price}}</span>
                                    </div>
                                    <div>
                                        <span>{{item.goods_attr}}</span>
                                    </div>
                                    <div>
                                        <img class="img1 btnReduc" data-id="338759" src="http://app.girdear.cn/mb/images/shop_num1.png" >
                                        <div class="productnum"><span class="spannum">{{item.goods_number}}</span></div>
                                        <img class="img3 btnAdd" data-id="338759" src="http://app.girdear.cn/mb/images/shop_num3.png" >
                                    </div>
                                </div>
                            </div>
                            <div class="q2">
                                <div class="img4 btnDel" data-id="338759">
                                    <img src="http://app.girdear.cn/mb/images/shop_del.png">
                                </div>
                            </div>
                            <div class="kong"></div>
                        </nav>
                    
                   </div>
                </div>
            </div>
        </section>
        <div class="bottom">
            <span style="margin-left: 10px;" id="goodsAmounts">合计：{{totalPrice.goods_amount}}</span>
            <div><span id="btnGoPay">去结算</span><img src="http://app.girdear.cn/mb/images/shop_pay.png"></div>
        </div>
	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js"
	export default {
		data(){
			return{
				goodslist:[],
				totalPrice:{},
				
			}
		},
		methods:{
			
		},
		mounted(){
			var that = this;
			if(localStorage.getItem("userID")){
				var  userID = localStorage.getItem("userID");
				
				var cartUrl = "http://girdear.cn/app/?callback=jQuery18302549055292685929_1512971391757&url=%2Fcart%2Flist&json=%7B%22tag%22%3A%22no_login%22%2C%22sid%22%3A%22e8f672dc4e588248ca1634f633e7297b903741c9%22%2C%22uid%22%3A%2284008%22%2C%22uname%22%3A%2215011346159%22%7D&_=1512971392079"
				MyAjax.fetchJsonp(cartUrl,(data)=>{
					console.log(data)
					that.goodslist = data.map.data.goods_list;
					that.totalPrice = data.map.data.total;
				})
			}
		}
	}
</script>

<style lang="scss" scoped="">
.btn_wrap4 nav{
    background: #FFF;
    margin-top: 75px;
}
.btn_wrap4 nav .q1{
    border-bottom:1px #ededed solid;
    height: 111px;
    width: 90%;
    margin: 0 auto;
    padding: 10px 0;
}
.btn_wrap4 nav .q1 .select{
    width: 30px;
    height: 100%;
    float: left;
}
.btn_wrap4 nav .q1 .select img{
    float: left;
    width: 20px;
    display: block;
    padding-top: 30px;
}
.btn_wrap4 nav .q1  .shop_pic{
    float: left;
    width: 80px;
}
.btn_wrap4 .content{
    float: left;
    width: 58%;
    height: 100%;
    padding-left: 10px;
}
.btn_wrap4 .content div:nth-child(2){
    color: #969696;
}
.btn_wrap4 .content > div{
    margin: 6px 0;
}
.btn_wrap4 .content div span:nth-child(1){
    font-size: 14px;
}
.btn_wrap4 .content div span:nth-child(2){
    font-size: 14px;
}
.btn_wrap4 .img1{
    width: 28px;
    float: left;
}
.btn_wrap4 .img2{
    width: 40px;
}
.btn_wrap4 .productnum{
    border-top: 1px #E1EAE6 solid;
    border-bottom: 1px #E1EAE6 solid;
    width: 35px;
    height: 28px;
    float: left;
}
.btn_wrap4 .spannum{
    line-height: 28px;
    display: block;
    text-align: center;
    color: rgb(0, 0, 0);
}
.btn_wrap4 .img3{
    width: 28px;
    float: left;
}
.btn_wrap4 .img4{
    float: right;
    width: 60px;
    height: auto;
    text-align: center;
}
.btn_wrap4 .img4 img{
    margin: 10px 5%;
    width:20px;
}

.btn_wrap4 nav .q2{
    height: 40px;
}
.btn_wrap4 nav .q2 span{
    line-height: 40px;
    color: #969696;
    margin: 0 5%;
}
.btn_wrap4 .kong{
    background:#ededed;
    height: 10px;
}

.bottom {
    position: absolute;
    bottom: 50px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: rgba(0, 0, 0, 0.6);
    color: #ffffff;
}



.bottom > img{
    width: 20px;
    display: block;
    float: left;
    margin: 15px 0 0 5%;
}
.bottom > span:nth-child(2){
    font-size: 14px;
    display: block;
    float: left;
}
.bottom > span:nth-child(3){
    font-size: 14px;
    display: block;
    float: left;
    width: 45%;
    text-align: right;
}
.bottom > div{
    font-size: 14px;
    display: block;
    float: right;
    margin: 7px 3% 0 0;
    width: 80px;
    height: 36px;
}
.bottom > div img{
    display: block;
    float: left;
    width: 80px;
    height: 36px;
}
.bottom > div >span{
    position: absolute;
    line-height: 36px;
    margin: auto 0;
    display: block;
    padding: 0 21px;
}
</style>