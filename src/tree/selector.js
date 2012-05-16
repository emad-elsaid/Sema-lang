sema.tree.selector = function(identifier){
	
	this.identifier = typeof identifier == 'string' ? identifier : '';
	
	this.getIdentifier = function(){
		return this.identifier;
	}
	
	this.render = function(translate){
		return translate==true
				? sema.utils.translator.translate(this.identifier)
				:this.identifier;
	}
	
	this.isSeparator = function(){
		var identifier = this.identifier.trim();
		return ['#','>','.',':',','].indexOf(identifier)>-1;
	}
	
	this.isPseudoPrefix = function(){
		return this.identifier.trim()==':';
	}
}
