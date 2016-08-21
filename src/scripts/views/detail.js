var detailTpl=require("../tpls/detail.string");
SPA.defineView("detail",{
	//装载home视图
	html:detailTpl,
	//定义插件
	plugins:[{
		name:"avalon",
		options:function(vm){
			vm.livelist=[];
		}
	}],
	//绑定视图事件
	boindEvents:{
		"show":function(){
			//相应事件
		}
	}

})

var mySwiper=new Swiper('.detail-container',{
	autoplay:2000,
	pagination: '.swiper-pagination'
})
$("#detail-swiper").on('tap',function(){
	console.log(1);
})
