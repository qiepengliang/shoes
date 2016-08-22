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
			var vm=this.getVM();
			$.ajax({
				type:"get",
				url:"/shoes/mock/livelist.json",
				data:{},
				success:function(res){
					vm.livelist=res;
				}
			});
			$(".paixu li").on("tap",function(){
				$(this).addClass("active").siblings().removeClass("active");
			});
		}
	}
})
