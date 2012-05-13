sema.tree.selector = function(identifier){
	
	this.identifier = typeof identifier == 'string' ? identifier : '';
	
	this.render = function(){
		return this.identifier;
	}
}
