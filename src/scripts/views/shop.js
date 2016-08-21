
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
			//特效
			// $(".shop-edit").on('tap',function(){
			// 	console.log(1);
			// 	$(this).html('编辑');
			// })
			$("header .aa").on('tap',function () {
				$(this).html('编辑');
				// console.log(1);
			})
		}
	},
	bindActions:{
		"switch":function(el,data){
			this.modules.content.launch(data.name);
		}
	}


})
