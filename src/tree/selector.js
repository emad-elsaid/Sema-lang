sema.tree.selector = function(identifier){
	
	this.identifier = typeof identifier == 'string' ? identifier : '';
	
	this.getIdentifier = function(){
		return this.identifier;
	}
	
	this.render = function(){
		return this.identifier;
	}
}
