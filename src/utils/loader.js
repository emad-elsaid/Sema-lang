sema.utils.loader = {
		
	getSemaFiles : function(){
		var files = [];
		for( var i=0; i<document.getElementsByTagName("link").length; i++){
			if( document.getElementsByTagName("link")[i].rel=='stylesheet/sema'){
				files.push(document.getElementsByTagName("link")[i].href);
			}
		};
		return files;
	},
	
	load: function(url,callback){
		$.get(url,callback);
	},
	
	loadSemaFiles : function(){
		var me = this;
		this.getSemaFiles().forEach(function(url){
			me.load(url,me.inject);
		});
		
	},
	
	inject : function(semaText){
		var css = sema.parse(semaText).result.render();
		var style = document.createElement('style');
		style.appendChild(document.createTextNode(css));
		document.body.appendChild(style);
	}
};
