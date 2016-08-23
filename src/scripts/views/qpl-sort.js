
var qplSort=require("../tpls/qpl-sort.string");
SPA.defineView("qpl-sort",{
	//装载my视图
	html:qplSort,
	//定义插件
	plugins:[
		'delegated',
		{
		name:"avalon",
		options:function(vm){
			vm.livelist=[];
		}
	}],
	//绑定tap事件
	bindActions:{
		'goto.detail':function (el,data) {
				SPA.open('detail');
				console.log(1);
		}
	},
	//绑定视图事件
	bindEvents:{
		"show":function(){
			//相应事件
			var mySwiper=new Swiper('#qpl-sortC', {
					onTransitionStart:function (swiper) {
								// console.log(swiper.activeIndex);
								$('.qpls-title li').eq(swiper.activeIndex).addClass('active').siblings().removeClass('active');
					}
			});
			$('.qpls-title li').on('tap',function () {
					mySwiper.slideTo($(this).index())
			})
		}
	}
})
