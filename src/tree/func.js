sema.tree.func = function(name,params){
	
	this.name = name;
	this.params = Array.isArray(params)? params : [];
	
	this.render = function(){
		return this.name+'('+this.params.join(',')+')';
	}
}
