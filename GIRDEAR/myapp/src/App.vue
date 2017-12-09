<template>
  <div id="container">
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
export default {
  components:{
  	"v-footer":Footer
  }
}
</script>

<style lang="scss">
@charset "utf-8";
@import "~@/lib/reset.scss";

html,body,#app,#container{
	@include rect(100%,100%);
}
#container{
	@include flexbox();
	@include flex-direction(column);
	#header{
		@include rect(100%,0.5rem);
		@include bgcolor(#eee);
		
	}
	#content{
		@include flex()
		@include rect(100%,auto);
		@include overflow()
	}
	#footer{
		@include rect(100%,0.5rem);
		@include bgcolor(#eee);
	
		ul {
             @include rect(100%, 100%);
             @include flexbox();
             li{
                  @include rect(auto, 100%);
                  @include flex();
                 
                 a{
                   @include rect(100%, 100%);
                   @include flexbox();
                   @include flex-direction(column);
                   @include justify-content();
                   @include align-items();
                   @include textcolor(#333);
                   i{
                   	@include fontsize(0.22rem)
                   }
                   &.router-link-active{
                      @include textcolor(#bfa971);
                   }
                 }
                 
             }
         }
	}
}
</style>
