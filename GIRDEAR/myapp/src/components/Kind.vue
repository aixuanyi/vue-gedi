<template>
	<div id="content">
		<section class="tree_left">
			<div id="scrollInner" style="height: 1000px; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
				<ul id="kindType">
					<li v-for="item in kindType">
						<router-link :to = "{name:'kindtype',params:{cat_id:item.cat_id}}">  {{item.cat_name}}</router-link>
					</li>
				</ul>
			</div>
		</section>
		<section class="tree_right">
			<div id="scrollInner" style="height: 1000px; transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
				<div id="conList">
					<h4>商品分类</h4>
					<ul id="kindList">
						<li v-for="(item,index) in kindList" :key="index">
							<router-link :to = "{name:'list',params:{cat_id:item.cat_id}}">
								<img  :src="item.img"/>
								<!--<img v-attr="src:imglist[index]"  />-->
								
								<span>{{item.cat_name}}</span>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import MyAjax from "@/md/MyAjax.js"
import * as types from '@/store/mutation-type.js'
import { mapState } from "vuex"
export default{
	data(){
		return{
			kindType:[],
			kindList:[],
			imglist:[]
		}
	},
	/*computed:{
      ...mapState([
        'kindType','kindList'
      ])
    },*/
	mounted(){
		var that = this;
		var typeUrl = "http://girdear.cn/app/?callback=jQuery18306110636292449194_1512457426613&url=%2Ftree&json=%7B%22cat_id%22%3A%22%22%2C%22_type%22%3A%22tree%22%7D&_=1512457427208";
		MyAjax.fetchJsonp(typeUrl,(data) => {
//			console.log(data.map.data);
			that.kindType = data.map.data;
//			that.$store.commit(types.KIND_TYPE_LIST,data.map.data)
		})
		var cat_id = this.$route.params.cat_id;
        console.log("cat_id",cat_id)
        var listUrl = "http://girdear.cn/app/?callback=jQuery18309593714352620164_1512462068891&url=%2Ftree&json=%7B%22cat_id%22%3A%22"+cat_id+"%22%2C%22_type%22%3A%22con%22%2C%22_title%22%3A%22%E5%A5%B3%E9%9E%8B%22%7D&_=1512462892299";
//		var listUrl = "http://localhost:3000/list?cat_id="+cat_id;


		MyAjax.fetchJsonp(listUrl,(data) => {
			console.log(data.map.data.list);
			that.kindList = data.map.data.list;
//			that.$store.commit(types.KIND_LIST_LIST,data.map.data.list)
			for(var i in that.kindList){
				that.imglist.push(that.kindList[i].img)
			}
		})
		
	},
	watch:{
		$route(){
			var that = this;
			var cat_id = this.$route.params.cat_id;
        	console.log("cat_id",cat_id)
        	var listUrl = "http://girdear.cn/app/?callback=jQuery18309593714352620164_1512462068891&url=%2Ftree&json=%7B%22cat_id%22%3A%22"+cat_id+"%22%2C%22_type%22%3A%22con%22%2C%22_title%22%3A%22%E5%A5%B3%E9%9E%8B%22%7D&_=1512462892299";

			MyAjax.fetchJsonp(listUrl,(data) => {
//				console.log(data.map.data.list);
				that.kindList = data.map.data.list;
//				that.$store.commit(types.KIND_LIST_LIST,data.map.data.list)
				that.imglist = [];
				for(var i in that.kindList){
					that.imglist.push(that.kindList[i].img)
				}
			})
		}
	}
}
</script>

<style scoped="" lang="scss">
.tree_left{
	position: absolute;
    top: 50px;
    bottom: 0;
    overflow: hidden;
    width: 30%;
    background: #fff;
    #scrollInner{
    	padding-bottom: 30px;
		
	    #kindType{
	    	width: 100%;
	    	list-style: none;
	    	li{
	    	  height: 49px;
			  line-height: 49px;
			  border-bottom: 1px solid #e0e0e0;
			  overflow: hidden;
			  background: #f3f4f6;
			  text-align: center;
			  a{
			  	display: block;
			  	border-right: 1px solid #e0e0e0;
			  	color: #000000;
			  	 &.router-link-active{
	                border-right: none;
    				background: #fff;
	             }
			  }
	    	}
	    }
    }
}
.tree_right{
	position: absolute;
    top: 50px;
    bottom: 0;
    overflow: auto;
    width: 70%;
    height: auto;
    left:30%;
    background: #fff;
    #conList{
    	width: 100%;
    	font-size: 12px;
    	h4{
    		 background: #fff;
    		margin:15px 0 0 15px;
    	}
    	#kindList{
    		background: #fff;
    		margin:15px;
    		li{
    			background: #fff;
			    width: 32.8%;
			    float:left;
			    img{
			    	width: 76px;
			    	height: 76px;
			    }
			    span{
			    	display: block;
				    background: #fff;
				    text-align: center;
				    text-indent: 0;
				    width: 100%;
				    margin-top:5px;
				    color: #000;
			    }
    		}
    	}
    }
}
</style>