var indexTpl=require("../tpls/index.string");
SPA.defineView("index",{
	//装载主视图
	html:indexTpl,
	//定义插件
	plugins:["delegated"],
	//装载子模块



	modules:[{
		name:"content",
		container:"#m-container",
		views:["home","sort","shop","my",'detail'],
		defaultTag:"home"

	}],

	//绑定tap事件
	bindActions:{
		"switch":function(el,data){
			this.modules.content.launch(data.name);
			$(el.el).addClass("active").siblings().removeClass("active");
		}
	}
});
