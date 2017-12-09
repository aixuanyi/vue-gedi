<template>
	<div id="content">
		<section class="con_main111" id="iScrollList">
             <div id="scrollInner" style="transition-timing-function: cubic-bezier(0.1, 0.57, 0.1, 1); transition-duration: 0ms; transform: translate(0px, 0px) translateZ(0px);">
                <ul id="shopList"> 
		            <li v-for="item in proList">
		                <div class="li-div">
		                    <div class="div-img">
		                        <router-link :to="{name:'detail',params:{goods_id:item.goods_id}}">
		                        	<img :src="item.goods_thumb">
		                        </router-link>
		                    </div>
		                    <div class="div-span" style="overflow:hidden">
		                        <span class="proname">{{item.goods_name}}</span>
		                        <span class="pull-left">{{item.shop_price}}</span>
		                       
		                    </div>
		                </div>
		            </li>
		    	</ul>
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
//			proList:[]
		}
	},
	computed:{
      ...mapState([
        'proList'
      ])
    },
	mounted(){
      var that = this;
      var cat_id = this.$route.params.cat_id;
      var url = "http://girdear.cn/app/?callback=jQuery1830460688079275023_1512465874089&url=%2Fhome%2Fcategory_list&json=%7B%22page%22%3A1%2C%22count%22%3A12%2C%22cat_id%22%3A%22"+cat_id+"%22%2C%22Cat_str%22%3A%22%22%2C%22title_name%22%3A%22%E7%A7%8B%E5%86%AC%E6%96%B0%E5%93%81%22%2C%22type%22%3A%22new%22%2C%22more%22%3A1%2C%22sort%22%3A%22desc%22%7D&_=1512465874450";
       MyAjax.fetchJsonp(url,(data) => {
        console.log(data)
//      that.proList = data.map.data;
		that.$store.commit(types.LIST_PRO_LIST,data.map.data)
      })
    }
}
</script>

<style lang="scss" scoped="">
*{margin: 0;padding: 0;}
.con_main111 {
    position: absolute;
    top: 91px;
    bottom: 0;
    box-sizing: border-box;
    overflow: auto;
    width: 100%;
    background: #fff;
    ul{
	    background-color: white;
	    list-style: none;
	    li{
	    	float: left;
	    	min-height: 21px;
	    	padding: 3% 2% 0 ;
	    	width: 50%;
	    	overflow: hidden;
			display: flex;
			flex-wrap: wrap;
     		.li-div{
     			
     			float: left;
			    overflow:hidden;
			    .div-img{
			    	a{
			    		img{
				    	width: 100%;
	    				height: auto;
	    				border: none;
	    				display: block;
				    }
			    	}
			    	
			    }
			    .div-span{
			    	span{display: block;font-size: 12px;}
			    	.proname{
			    		text-align: left;
					    text-indent: 1px;
					    color: #969696;
					    overflow: hidden;
					    float: right;
					    width: 63%;
					    white-space: nowrap;
					    text-overflow: ellipsis;
			    	}
					.pull-left{
					  width: 53px;
	    			  overflow: hidden;
					}
					.pull-left{float: left;}
			    }
     		}
	    }
	   
	}
}
</style>