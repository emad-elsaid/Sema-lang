sema.tree.block = function(selector,properties){

	this.selector = Array.isArray(selector)? selector : [];
	this.properties = Array.isArray(properties)? properties : [];
	
	this.render = function(){
		
		var me = this;
		
		// if block has no properties then don't produce any HTML
		if(this.properties.length==0)
			return '';
			
		// get selector string
		var selector = this.selector
							.map(function(item,index){
								var prefix = index>0
											&&(!item.isSeparator())
											&&(!me.selector[index-1].isSeparator())
											? ' '
											: '';
								var translate = index>0
											&&(!item.isSeparator())
											&&me.selector[index-1].isPseudoPrefix()
											? true
											: false;
								return prefix + item.render(translate);
							})
							.join('');
		
		// get properties string
		var properties = this.properties
							.map(function(item){return item.render();})
							.join('');
							
		// form the output and send it 
		return selector + '{' + properties + '}';
	}
}
