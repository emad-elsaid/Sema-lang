/*
 *      selector.js
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
 *      @Description : class represents single selector token
 * 		@Package : Sema Tree
 */

sema.tree.selector = function(identifier){
	
	// the selector value
	this.identifier = typeof identifier == 'string' ? identifier : '';
	
	/**
	 * return the identifier value
	 */
	this.getIdentifier = function(){
		return this.identifier;
	}
	
	/**
	 * convert teh object into CSS alternative
	 * @param translate <Boolean> : if it should be translated or not
	 * @return <String> : the CSS alternative or this selector
	 */
	this.render = function(translate){
		return translate==true
				? sema.utils.translator.translate(this.identifier)
				:this.identifier;
	}
	
	/**
	 * check if this the selector is separator
	 * @return <Boolean> : true if it is a separator
	 */
	this.isSeparator = function(){
		var identifier = this.identifier.trim();
		return ['#','>','.',':',','].indexOf(identifier)>-1;
	}
	
	/**
	 * check if it is a pseudo selector prefix
	 * @return <Boolean> : true if it is a pseudo selector prefix
	 */
	this.isPseudoPrefix = function(){
		return this.identifier.trim()==':';
	}
}
