var detailTpl=require("../tpls/detail.string");
SPA.defineView("detail",{
	//装载home视图
	html:detailTpl,
	//定义插件
	plugins:[
		'delegated',
		{
		name:"avalon",
		options:function(vm){
			vm.livelist=[];
		}
	}],
	//绑定视图事件
	bindEvents:{
		"show":function(){
			//相应事件
			$(".detail-joinCar").on('tap',function(){
					localStorage.goodsID='1';
			})

			var mySwiper=new Swiper('.lunbo',{
				autoplay:2000,
				pagination: '.swiper-pagination',
				autoplayDisableOnInteraction : false,
				loop:true
			})
		}
	}

})
