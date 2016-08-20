
var shopTpl=require("../tpls/shop.string");
SPA.defineView("shop",{
	//装载sort视图
	html:shopTpl,
	//定义插件
	plugins:[{
		name:"avalon",
		options:function(vm){
			vm.livelist=[];
		}
	}],
	//绑定视图事件
	bindEvents:{
		"show":function(){
			//相应事件
		}
	}
})
