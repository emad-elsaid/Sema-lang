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
	
	load: function(url){
		
	   var page_request = false

	   if (window.XMLHttpRequest) // if Mozilla, Safari etc
		  page_request = new XMLHttpRequest()
	   else if (window.ActiveXObject) // if IE
	   { 

		 try {
		   page_request = new ActiveXObject("Msxml2.XMLHTTP")
		 } 
		 catch (e){
		   try{
			 page_request = new ActiveXObject("Microsoft.XMLHTTP")
		   }
		   catch (e){}
		 }
	   }
	   else
		 return false

	   page_request.open('GET', url, false) //get page synchronously 
	   page_request.send(null)
	   return page_request.responseText;
	},
	
	loadSemaFiles : function(){
		var me = this;
		this.getSemaFiles().forEach(function(url){
			me.inject(me.load(url));
		});
		
	},
	
	inject : function(semaText){
		var parser = sema.parse(semaText);
		sema.utils.logger.log(parser);
		var css = parser.result.render();
		var style = document.createElement('style');
		style.appendChild(document.createTextNode(css));
		document.head.appendChild(style);
	}
};
