<template>
	<div id="content">
		<section v-if="flag" class="list_wrapper service_list" style="margin-top: 100px;">
            <ul>
                <li id="email_follow"><a href="#"><img src="http://app.girdear.cn/mb/images/img2017/youxiang2017.png"><p>订阅邮件</p></a></li>
                <li><a href="https://m.weibo.cn/u/2449194972"><img src="http://app.girdear.cn/mb/images/img2017/weibo2017.png"><p>微博关注</p></a></li>
                <li id="VipLook"><a href="#"><img src="http://app.girdear.cn/mb/images/img2017/huiyuan2017.png"><p>会员礼遇</p></a></li>
                <li id="commonaddress"><a href="#"><img src="http://app.girdear.cn/mb/images/img2017/dizhi2017.png"><p>收货地址</p></a></li>
                <li id="myredpacket1"><a href="#"><img src="http://app.girdear.cn/mb/images/img2017/youhuiquan2017.png"><p>优惠券明细</p></a></li>
                <li id="myintergral1"><a href="#"><img src="http://app.girdear.cn/mb/images/img2017/jifen2017.png"><p>积分明细</p></a></li>
                <li><a href="http://www.girdear.cn/mb/html/custom.html?id=174&amp;title=关于我们"><img src="http://app.girdear.cn/mb/images/img2017/womeng2017.png"><p>关于我们</p></a></li>
                <li id="feedback"><a href="#"><img src="http://app.girdear.cn/mb/images/img2017/lianxi2017.png"><p>联系我们</p></a></li>
                <li id="usinghelp"><a href="#"><img src="http://app.girdear.cn/mb/images/img2017/bangzhu2017.png"><p>使用帮助</p></a></li>
                <li id="afersalesservice1"><a href="#"><img src="http://app.girdear.cn/mb/images/img2017/shouhou2017.png"><p>售后服务</p></a></li>
                
            </ul>
        </section>
        <section v-else style="margin-top: 100px;text-align: center;line-height: 100px;font-size: 30px;">
        	您还没有登录，请先登录!
        </section>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				flag:false
			}
		},
		mounted(){
			if(localStorage.getItem("userID")){
				this.flag = true;
				console.log(this.flag)
			}else{
				this.flag = false;
				console.log(this.flag)
			}
		}
	}
</script>

<style scoped="" lang="scss">
#content{
	
	.service_list{
		
		border-top: 1px solid #c8c8c8;
		ul{
			list-style: none;
			li{
				border-bottom:1px solid #c8c8c8;
				padding-right:12px;
				padding-left:12px; 
				clear: both;
				a{
					display:inline-block; 
					height:50px; 
					color: #3C3C3C;
					width:100%; 
					line-height:50px;
					background: url(http://app.girdear.cn/mb/images/next2.png) no-repeat right center;
					img{
						display:block; 
						float: left; 
						height: 40px; 
						padding:10px 10px 0 0;
					}
					p{
						display:block; 
						float: left;  
						height: 50px; 
						line-height: 50px; 
						font-size:16px;
					}
				}
			}
		}
	}
}
</style>