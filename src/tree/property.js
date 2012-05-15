sema.tree.property = function(name,value,important){
	
	this.name = typeof name == "string" ? name : '';
	this.value = Array.isArray(value) ? value : [];
	this.important = important;
	
	this.render = function(){
		var name = sema.utils.translator.translate(this.name);
		var value = this.value
						.map(function(item){ 
							return typeof item=="string"
									? sema.utils.translator.translate(item)
									: item.render();  
						})
						.join(' ');
		var important = this.important? ' !important':'';					
		
		return name+':'+value+important+';';
	}
}
