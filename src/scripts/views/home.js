var homeTpl=require("../tpls/home.string");
SPA.defineView("home",{
	//装载home视图
	html:homeTpl,
	//定义插件

	//绑定视图事件
	bindEvents:{
		'show':function(){
			console.log(111);
			//相应事件
			var mySwiper = new Swiper('#home-swiper',{
				autoplay:1000
			});
		}
	}
})
