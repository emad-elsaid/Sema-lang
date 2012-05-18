/*
 *      loader.js
 *      
 *      Copyright 2012 Blaze Boy <blazeeboy@gmail.com>
 *      
 *      This program is free software; you can redistribute it and/or modify
 *      it under the terms of the GNU General Public License as published by
 *      the Free Software Foundation; either version 2 of the License, or
 *      (at your option) any later version.
 *      
 *      This program is distributed in the hope that it will be useful,
 *      but WITHOUT ANY WARRANTY; without even the implied warranty of
 *      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *      GNU General Public License for more details.
 *      
 *      You should have received a copy of the GNU General Public License
 *      along with this program; if not, write to the Free Software
 *      Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
 *      MA 02110-1301, USA.
 *      
 *      @Description : loader is an object loads files with ajax, inject
 * 		compiled CSS into page head
 * 		@Package : Sema utilities
 */

sema.utils.loader = {
		
	/**
	 * get linked sema fiels to current document
	 * links of sema should be added before library script tag
	 * <link rel="stylesheet/sema" type="text/css" href="style.sema">
	 * @return <Array> : array of sema fiels URLs
	 */
	getSemaFiles : function(){
		
		// prepare an array to hold URls
		var files = [];
		
		// get all link tags in the document
		var links = document.getElementsByTagName("link");
		
		/*
		 * for each link tag in  the document if "rel" is sema then add
		 * href to the files array, note that i didn't use the forEach
		 * as links is not an array it is a nodeList or DomList, 
		 * i don't remember exactly, the point is it not an Array so
		 * son't deal with it as an Array.
		 */
		for( var i=0; i<links.length; i++){
			if( links[i].rel=='stylesheet/sema'){
				files.push(links[i].href);
			}
		};
		
		return files;
	},
	
	/**
	 * loads a file using synchronously request and return its content
	 * @return <String> : file content
	 */
	load: function(url){
		
		/*
		 * this snippet of code i got it from the internet
		 */ 
		var page_request = false;
	
		// create the appropriate ajax object
		if (window.XMLHttpRequest) // if Mozilla, Safari etc
			page_request = new XMLHttpRequest();
		else if (window.ActiveXObject) // if IE
		{ 
			try {
				page_request = new ActiveXObject("Msxml2.XMLHTTP");
			} 
			catch (e){
				try{
					page_request = new ActiveXObject("Microsoft.XMLHTTP");
				}
				catch (e){}
			}
		}
		else
		return false;
		
		page_request.open('GET', url, false); //get page synchronously 
		page_request.send(null);
		return page_request.responseText;
	},
	
	/**
	 * load all linked sema files and pass them to
	 * the injection function to compile and inject
	 */
	loadSemaFiles : function(){
		var me = this;
		
		// get sema files and for each compile and inject
		this.getSemaFiles().forEach(function(url){
			// load the file then inject it to head
			me.inject(me.load(url));
		});
		
	},
	
	/**
	 * takes sema text and compile it then add it to head tag
	 * as CSS style tag
	 * @param semaText <String> : sema string
	 */
	inject : function(semaText){
		
		// parse semaText into a tree
		var parser = sema.parse(semaText);
		
		// log the parsing results to console
		sema.utils.logger.log(parser);
		
		// compile the tree into CSS
		var css = parser.result.render();
		
		// create a style tag
		var style = document.createElement('style');
		
		// the add the css to the style and add it to the document head
		style.appendChild(document.createTextNode(css));
		document.head.appendChild(style);
	}
};
