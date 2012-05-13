sema.tree.property = function(name,value){
	
	this.name = typeof name == "string" ? name : '';
	this.value = Array.isArray(value) ? value : [];
	
	this.render = function(){
		var value = this.value
						.map(function(item){ return typeof item=="string"? item : item.render();  })
						.join(' ');
							
		return this.name+':'+value+';';
	}
}
