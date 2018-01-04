<template>
	<div id="content">
		<img src="../img/home-img2.jpeg" id="h_banner"/>
		<img src="../img/home-img3.jpeg" id="h_fenli"/>
		<img src="../img/home-img4.jpeg" id="h_xiatuda" />
		<img src="../img/home-img5.jpeg" id="h_xiatuda2" />
		<img src="../img/home-img6.jpeg" id="h_xiatuda3" />
		<img src="../img/home-img7.jpeg" id="h_xiatudazhong" />
		<!--轮播开始-->
		<div id="h_lunbo">
			<img src="../img/home-img8.jpeg" />
		</div>
		<!--轮播结束-->
		<img src="../img/home-img9.jpg"  id="h_zhapian"/>
		<img src="../img/home-img10.jpeg" id="h_qiudong" />
		<div id="h_qiud_neir1">
			<div v-for="item in homeList" class="h_qiud_xiaoneir1">
				<router-link :to="{name:'detail',params:{goods_id:item.goods_id}}">
					<img :src="item.goods_thumb" class="h_qiud_neir1-img1"/>
				</router-link>
				<div style="overflow:hidden;line-height:30px;text-align:center;">
					<span class="pull-left">{{item.shop_price}}</span> 
                    <span>{{item.goods_name}}</span>                                    
                </div>
			</div>			
				
		</div>
		
	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js"
	export default{
		data(){
			return{
				homeList:[]
			}
		},
		mounted(){
			var that = this;
			var homeUrl = "http://girdear.cn/app/?callback=jQuery183036631858969477626_1512962883809&url=%2Fhome%2Flook&json=%7B%22page%22%3A1%2C%22count%22%3A26%2C%22sid%22%3A%22207e3949fcb18fa9cd044dbadc4bca886ad8d803%22%2C%22uid%22%3A%2284008%22%2C%22uname%22%3A%2215011346159%22%7D&_=1512962884245";
			MyAjax.fetchJsonp(homeUrl,(data) => {
				console.log(data.map.data);
				that.homeList = data.map.data.list;
	//			that.$store.commit(types.KIND_TYPE_LIST,data.map.data)
			})
		}
	}
</script>

<style lang="scss" scoped="">
#content{
	position:relative;
}
#h_banner{
	width: 99.1045%;
    height: 87.284%;
    left: 0%;
    top: 0.238663%;
    position: absolute;
}
#h_fenli{
	width: 99.1045%;
	left: 0%;
    top: 88%;
    position: absolute;
}
#h_xiatuda{
	width: 99.1045%;
	left: 0%;
    top: 105%;
    position: absolute;
}
#h_xiatuda2{
	width: 99.1045%;
	left: 0%;
    top: 280%;
    position: absolute;
}
#h_xiatuda3{
	width: 99.1045%;
	left: 0%;
    top: 486%;
    position: absolute;
}
#h_xiatudazhong{
	width: 99.1045%;
	left: 0%;
    top: 676%;
    position: absolute;
}
#h_lunbo img{
	width: 99.1045%;
	left: 0%;
    top: 688%;
    position: absolute;
}
#h_zhapian{
	width: 99.1045%;
	left: 0%;
    top: 740%;
    position: absolute;
}
#h_qiudong{
	width: 99.1045%;
	left: 0%;
    top: 766%;
    position: absolute;
}
#h_qiud_neir1{
	width: 99.1045%;
	left: 0%;
    top: 786%;
    position: absolute;
}
.h_qiud_xiaoneir1{
	float: left;
    width: 46%;
	margin:0 2%
}
.h_qiud_xiaoneir1 p{
	width: 99.1045%;
    top: -10%;
    float: left;
    position: absolute;
}
.h_qiud_xiaoneir2{
	float: left;
    width: 46%;
	margin:0 2%
}
.h_qiud_neir1-img1{
	width:100%;
    height: auto;
}
.h_qiud_neir1-img2{
	width:100%;
    height: auto;
}
#h_qiud_neir2{
	width: 99.1045%;
	left: 0%;
    top: 824%;
    position: absolute;
}
#h_qiud_neir3{
	width: 99.1045%;
	left: 0%;
    top: 863%;
    position: absolute;
}
</style>