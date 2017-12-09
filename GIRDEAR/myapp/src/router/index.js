import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import HomeHeader from '@/components/HomeHeader.vue'
import Home from '@/components/Home.vue'
import KindHeader from '@/components/KindHeader.vue'
import Kind from '@/components/Kind.vue'
import CartHeader from '@/components/CartHeader.vue'
import Cart from '@/components/Cart.vue'
import UserHeader from '@/components/UserHeader.vue'
import User from '@/components/User.vue'
import ListHeader from '@/components/ListHeader.vue'
import List from '@/components/List.vue'
import LoginHeader from '@/components/LoginHeader.vue'
import Login from '@/components/Login.vue'
import RegistHeader from '@/components/RegistHeader.vue'
import Regist from '@/components/Regist.vue'
import Footer from '@/components/Footer.vue'
import Detail from '@/components/Detail.vue'
import DetailHeader from '@/components/DetailHeader.vue'
import DetailFooter from '@/components/DetailFooter.vue'

export default new Router({
  routes: [
    {
      path: '/',
  		redirect:'/home'
    },
    {
      path: "/kind",
      redirect:"/kind/353"
    },
    {
    	path:'/home',
    	name:'home',
    	components:{
    		header:HomeHeader,
    		content:Home,
    		footer:Footer
    	}
    },
    {
    	path:'/kind',
    	name:'kind',
    	components:{
    		header:KindHeader,
    		content:Kind,
    		footer:Footer
    	}
    },
    {
    	path:'/kind/:cat_id',
    	name:'kindtype',
    	components:{
    		header:KindHeader,
    		content:Kind,
    		footer:Footer
    	}
    },
    {
    	path:'/list/:cat_id',
    	name:'list',
    	components:{
    		header:ListHeader,
    		content:List
    	}
    },
    {
    	path:'/cart',
    	name:'cart',
    	components:{
    		header:CartHeader,
    		content:Cart,
    		footer:Footer
    	}
    },
    {
    	path:'/user',
    	name:'user',
    	components:{
    		header:UserHeader,
    		content:User,
    		footer:Footer
    	}
    },
    {
    	path:'/regist',
    	name:'regist',
    	components:{
    		header:RegistHeader,
    		content:Regist
    	}
    },
    {
    	path:'/detail/:goods_id',
    	name:'detail',
    	components:{
    		header:DetailHeader,
    		content:Detail,
    		footer:DetailFooter
    	}
    },
    {
    	path:'/login',
    	name:'login',
    	components:{
    		header:LoginHeader,
    		content:Login
    	}
    }
  ]
})
