var homeTpl=require("../tpls/home.string");
SPA.defineView("home",{
	//装载home视图
	html:homeTpl,
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
