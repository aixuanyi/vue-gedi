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
						<div class="productnum"><span class="spannum" id="spannum">{{cart_num}}</span></div>
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
					<span><img src="http://app.girdear.cn/mb/images/pinglun.png">用户评论(162)</span>
					<em><img src="http://app.girdear.cn/mb/images/next1.png"></em>
				</li>
			</ul>
		</article>
		<div id="v-html" v-html="html" style="width: 100%;">
			{{html}}
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
				cart_num:""
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
	    	this.cart_num++;
	    	//http://girdear.cn/app/?callback=jQuery183002596382661525598_1512740526461&url=%2Fcart%2Fupdate&json=%7B%22rec_id%22%3A%22339101%22%2C%22new_number%22%3A4%2C%22tag%22%3A%22no_login%22%2C%22sid%22%3A%22207e3949fcb18fa9cd044dbadc4bca886ad8d803%22%2C%22uid%22%3A%2284008%22%2C%22uname%22%3A%2215011346159%22%7D&_=1512740797357  

	    },
	    reduceNum(){
	    	
	    	if(this.cart_num==1){
	    		this.cart_num=1;
	    	}else{
	    		this.cart_num--;
	    	}
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
</style>