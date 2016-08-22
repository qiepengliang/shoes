
var myTpl=require("../tpls/my.string");
SPA.defineView("my",{
	//装载my视图
	html:myTpl,
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
