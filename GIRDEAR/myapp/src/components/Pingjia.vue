<template>
	<div id="content">
		<div class="con_main_scrollWrap" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
            <ul class="collectList" id="collectList">
                 <li v-for="item in pingList">
                    <div class="li_wrap">
                        <div class="li_top">
                            <em style="color:#b5b5b5">{{item.author}}</em>
                            <!-- <em class="pull-right">2017/10/31 16:01:28</em> -->
                        </div>
                        <div class="li_content">
                            <div class="li_content_img">
                            </div>
                            <div class="li_content_font" style="color:#333">
                                {{item.content}}
                            </div>
                        </div>
                        <div class="li_bottom">
                            <em class="li_bottom_font">
                                {{item.create}}
                            </em>
                        </div>
                    </div>
                </li>
   
			</ul>
                   
        </div>
	</div>
</template>


<script>
import MyAjax from "@/md/MyAjax.js"
export default{
	data(){
		return{
			pingList:[]
		}
	},
	mounted(){
		var that = this;
        var goods_id = this.$route.params.goods_pid;
        var pingjiaUrl = "http://girdear.cn/app/?callback=jQuery18304079699224018247_1512815162853&url=%2Fcomments&json=%7B%22page%22%3A1%2C%22count%22%3A12%2C%22goods_id%22%3A%22"+goods_id+"%22%2C%22sid%22%3A%22207e3949fcb18fa9cd044dbadc4bca886ad8d803%22%2C%22uid%22%3A%2284008%22%2C%22uname%22%3A%2215011346159%22%7D&_=1512815387504"
        MyAjax.fetchJsonp(pingjiaUrl,(data)=>{
        	console.log(data.map.data)
        	that.pingList = data.map.data
        })
	}
}
</script>

<style scoped="">
ul{width:93.125%;margin-left:3.4375%;margin-top: 50px}
ul li{margin-top:10px;}
.con_main_scrollWrap ul{
    background-color: white;
}
.con_main_scrollWrap ul li{
    border-bottom: 1px solid #dcdcdc;
}
.li_content_img img{
    width:13%;
    height: 13%
}
.li_wrap{
    padding:10px;
}
.li_content_font{
    font-size:14px;
    margin:10px 0px;
}
.li_top em{
    color:#979797;
}
.li_bottom_font{
    color:#767676;
}
</style>