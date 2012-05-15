sema.tree.measurement = function(value){
	this.value = value;
	
	this.render = function(){
		var unit = this.value.match(/[^0-9\.\-]+$/)[0];
		var t_unit = sema.utils.translator.translate(unit);
		return this.value.replace(unit,t_unit);
	}
}
