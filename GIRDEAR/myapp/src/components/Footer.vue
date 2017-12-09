<template>
<footer id="footer">
	<ul>
		<li v-for="item in footerList">
			<router-link :to="item.path">
				<i class="iconfont" :class="item.icon"></i>
				<p>{{item.name}}</p>
			</router-link>
		</li>
	</ul>
</footer>
</template>

<script>
export default{
	data(){
		return{
			footerList:[
				{
		           icon:'icon-shangcheng',
		           name:"商城",
		           path:"/home"
		        },{
		           icon:'icon-fenlei',
		           name:"分类",
		           path:"/kind"
		        },{
		           icon:'icon-gouwuche',
		           name:"购物车",
		           path:"/cart"
		        },{
		           icon:'icon-wode',
		           name:"我的",
		           path:"/user"
		        }
			]
			
		}
	}
}
</script>

<style lang="scss">
	#footer{
		z-index: 10;
	}
</style>