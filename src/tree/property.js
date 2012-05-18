/*
 *      property.js
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
 *      @Description : represent a property line that contains 
 * 		property name and values
 * 		@Package : Sema Tree
 */

sema.tree.property = function(name,value,important){
	
	// name of the property
	this.name = typeof name == "string" ? name : '';
	
	// vlues array of that property
	this.value = Array.isArray(value) ? value : [];
	
	// if it is marked as important or not
	this.important = important;
	
	/**
	 * compile the property to CSS
	 * @return <String> : CSS alternative of the object
	 */
	this.render = function(){
		
		// translate property name
		var name = sema.utils.translator.translate(this.name);
		
		// foreach value translate or render depending on the type
		var value = this.value
						.map(function(item){ 
							return typeof item=="string"
									? sema.utils.translator.translate(item)
									: item.render();  
						})
						.join(' ');
		
		// if it is important them create suffix
		var important = this.important? ' !important':'';					
		
		return name+':'+value+important+';';
	}
}
