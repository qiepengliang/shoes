
var sortTpl=require("../tpls/sort.string");
SPA.defineView("sort",{
	//装载sort视图
	html:sortTpl,
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
