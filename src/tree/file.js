sema.tree.file = function(blocks){

	this.blocks = Array.isArray(blocks) ? blocks : [];
	
	this.addBlock = function(block){
		this.blocks.push(block);
	}
	
	this.render = function(){
		return this.blocks
					.map(function(block){ return block.render(); })
					.join('');		
	}
}
