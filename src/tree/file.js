/*
 *      file.js
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
 *      @Description : file is a class represent a file content 
 * 		parsed with the parser into sema tree of objects
 * 		@Package : Sema Tree
 */

sema.tree.file = function(blocks){
	
	// blocks passed to the constructor, it is an array of blocks objects
	this.blocks = Array.isArray(blocks) ? blocks : [];
	
	/**
	 * add new block object to the file
	 * @param block <sema.tree.block> : a block object
	 */
	this.addBlock = function(block){
		this.blocks.push(block);
	}
	
	/**
	 * compile the file into css
	 * @return <String>: CSS string of the file
	 */
	this.render = function(){
		return this.blocks
					.map(function(block){ return block.render(); })
					.join('');		
	}
}
