<template>
	<div id="content">
		<mt-swipe :auto="0">
		  <mt-swipe-item v-for="item in detailBanner" key="index"><img :src="item.url" /></mt-swipe-item>
		</mt-swipe>
		<article class="pd_miaoshu">
			<div class="m_top">
				<p style="font-size: 15px; font-weight: bold;">{{page_title}}</p>
				<span style="color: red; font-size: 12px;"></span>
				<p>
					<span>商城价</span>
					<span style="font-size: 16px;" class="color goods_prices">{{shop_price}}</span>
				</p>
			</div>
			<div class="m_bottom">
				<p>
					<em>累计销量{{total_sale}}件</em>
				</p>
			</div>
			<div class="s_main">
				<div class="size">
					<div class="title">颜色</div>
					<ul>
						<li class="goodAttr" v-for="(item,index) in colorList">
							
							<span :class="activeIndex == index ? 'active': ''" @click="changeActive(index)" >{{item.attr_value}}</span>
							
						</li>
					</ul>
				</div>
				<div class="size">
					<div class="title">尺码</div>
					<ul class="sizeUl">
						<li class="goodAttr" v-for="(item,index) in sizeList">
							<span :class="currentIndex == index ? 'current': ''" @click="changeIndex(index)" data-id="item.goods_attr_id">{{item.attr_value}}</span>
						</li>
					</ul>
				</div>
				<div class="num">
					<div class="title" id="product_number">数量 ( 库存 {{goods_number}} 件) </div>
					<div class="title margin-top">
						<img class="img1" id="btnReduc" src="http://app.girdear.cn/mb/images/shop_num1.png" @click="reduceNum()">
						<div class="productnum"><span class="spannum" id="spannum">{{number}}</span></div>
						<img class="img3" id="btnAdd" src="http://app.girdear.cn/mb/images/shop_num3.png" @click="addNum()">
					</div>
					<div class="goodCount">
					</div>
				</div>
			</div>
		</article>
		<article class="pd_list">
			<ul>
				<li id="liComments">
					<router-link :to="{name:'pingjia',params:{goods_pid:id}}" tag="span"><img src="http://app.girdear.cn/mb/images/pinglun.png">用户评论</router-link>
					<em><img src="http://app.girdear.cn/mb/images/next1.png"></em>
				</li>
			</ul>
		</article>
		<div id="v-html" v-html="html" style="width: 100%;">
			
		</div>
		<div id="footer">
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
        <div class="btf_an2" id="btn_addshop" @click="addCart()">
            <span>加入购物车</span>
        </div>
    </article>
		</div>
	</div>
</template>

<script>
	import Vue from "vue"
	import MyAjax from "@/md/MyAjax.js"
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default{
		data(){
			return{
				html:"",
				colorList:[],
				sizeList:[],
				goods_number:"",
				total_sale:"",
				shop_price:"",
				page_title:"",
				detailBanner:[],
				activeIndex:0,
				currentIndex: 0,
				number:1,
				id:""
			}
		},
		mounted(){
	      var that = this;
	      var goods_id = this.$route.params.goods_id;
	      
	      var detailUrl = "http://girdear.cn/app/?callback=jQuery183004098796664461868_1512550608523&url=%2Fgoods&json=%7B%22goods_id%22%3A%22"+goods_id+"%22%2C%22page%22%3A1%2C%22count%22%3A3%2C%22sid%22%3A%22207e3949fcb18fa9cd044dbadc4bca886ad8d803%22%2C%22uid%22%3A%2284008%22%2C%22uname%22%3A%2215011346159%22%7D&_=1512550609029"
	       MyAjax.fetchJsonp(detailUrl,(data) => {
	        console.log(data.map)
	        that.html = data.map.data.html;
	        that.colorList = data.map.data.specification[0].value;
	        that.sizeList = data.map.data.specification[1].value;
	        that.goods_number = data.map.data.goods_number;
	        that.total_sale = data.map.data.total_sale;
	        that.shop_price = data.map.data.shop_price;
	        that.page_title = data.map.data.page_title;
	        that.detailBanner = data.map.data.pictures;
	        that.cart_num = data.map.data.cart_num*1 + 1;
	        that.id = data.map.data.id;
	      })
	      
	   },
	   methods:{
	   	changeIndex(index){
	    	this.currentIndex = index;
	    	
	    },
	    changeActive(index){
	    	this.activeIndex = index;

	    },
	    addNum(){
	    	this.number = this.number*1 + 1;
	    	

	    },
	    reduceNum(){
	    	
	    	if(this.number==1){
	    		this.number=1;
	    	}else{
	    		this.number = this.number*1 - 1;
	    	}
	    },
	    addCart(){
	    	var goods_id = this.$route.params.goods_id;
	    	var  userID = localStorage.getItem("userID");
	    	var pageUrl = "http://girdear.cn/app/?callback=jQuery18308698674484292623_1512970677108&url=%2Fcart%2Fcreate&json=%7B%22goods_id%22%3A%22"+goods_id+"%22%2C%22number%22%3A%22"+this.number+"%22%2C%22spec%22%3A%2216425%2C16427%22%2C%22tag%22%3A%22no_login%22%2C%22sid%22%3A%22207e3949fcb18fa9cd044dbadc4bca886ad8d803%22%2C%22uid%22%3A%2284008%22%2C%22uname%22%3A%2215011346159%22%7D&_=1512970797690";
	      MyAjax.fetchJsonp(pageUrl,(data) =>{
	      	console.log(data)
	      })
	    }
	   }
	}
</script>

<style scoped="" lang="scss">
	*{font-size: 12px;}
	ul{width:93.125%;margin-left:3.4375%;}
	.mint-swipe{
		width: 100%;
		height: 377px;
		.mint-swipe-items-wrap{
			width:100%;
			height:100%;
			img{
				-webkit-flex-shrink: 0;
				-ms-flex: 0 0 auto;
				flex-shrink: 0;
				width: 100%;
				height: 100%;
				position: relative;
			}
		}
	}
	
	#v-html{
		width: 100%;
		img{
			width: 100%;
		}
	}
	.pd_miaoshu {
		width: 100%;
		padding: 10px 0;
		background: #fff;
		.m_top{
			width: 92%;
			margin: 0 auto;
			p{
				color: #3c3c3c;
				font-family: "微软雅黑";
				line-height: 23px;
				span.color {
					color: #ff3131;
					padding-right: 20px;
				}
				span {
					color: #adadad;
				}
			}
		}
		.m_bottom {
			width: 100%;
			background: #fff;
			p {
				width: 92%;
				height: 35px;
				margin: 0 auto;
				border-top: 1px dashed #9c9c9c;
				span {
					display: block;
					float: left;
				}
			}
		}
	}
	.pd_miaoshu .m_bottom p span>img {
		display: block;
		width: 18px;
		float: left;
		padding-top: 12px;
	}
	.pd_miaoshu .m_bottom p em {
		display: block;
		float: right;
		font-style: normal;
		color: #969696;
		line-height: 35px;
	}
	.s_main {
		/* border: 1px red solid;*/
		border-top: 1px #ebebeb solid;
		min-height: 100px;
		padding-top: 10px;
	}
	.s_main .size li {
		/* border: 1px red solid;*/
		float: left;
		width: 25%;
		text-align: center;
		padding: 10px 0;
	}
	.s_main .size li span.active{
		background: #F9004F;
		color: #FFFFFF;
		border: 0;
	}
	.s_main .sizeUl li span.current{
		background: #F9004F;
		color: #FFFFFF;
		border: 0;
	}
	.num,
	.s_main .size ul {
		overflow: hidden;
	}
	.s_main .size li span {
    width: 80%;
    height: 28px;
    vertical-align: middle;
    display: inline-block;
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    line-height: 28px;
}
	.s_main .size li.selected span {
		background-color: #F9004F;
		border: 1px solid #F9004F;
		color: white;
	}
	.s_main .size li.noproduct span {
		border: 1px dashed #D6D6D8;
		color: #D6D6D8;
	}
	.s_main .size li img {
		width: 100%;
		height: 28px;
		vertical-align: middle;
	}
	.color_select {
		background-color: #F9004F;
		border-radius: 5px;
	}
	
	.s_main .title {
		padding: 3px 10px 2px;
	}
	.img1 {
		width: 28px;
		float: left;
	}
	.img2 {
		width: 40px;
	}
	.productnum {
		border-top: 1px #E1EAE6 solid;
		border-bottom: 1px #E1EAE6 solid;
		width: 35px;
		height: 28px;
		float: left;
	}
	.spannum {
		line-height: 28px;
		display: block;
		text-align: center;
		color: rgb(0, 0, 0);
	}
	
	.img3 {
		width: 28px;
		float: left;
	}
	.pd_list {
		width: 100%;
		background: #fff;
		ul {
			width: 92%;
			margin: 0 auto;
			li {
				width: 100%;
				height: 45px;
				
				line-height: 45px;
				border-top: 1px solid #d7d7d7;
				span {
					display: block;
					float: left;
					color: #3c3c3c;
					img {
						display: block;
						width: 24px;
						float: left;
						padding: 13px 10px 0 0;
					}
				}
				em {
					display: block;
					float: right;
					img {
						display: block;
						width: 8px;
						padding-top: 16px;
					}
				}
			}
		}
	}
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