/*
 *      block.js
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
 *      @Description : sema block class, it represent sema block like CSS block
 * 		@Package : Sema Tree
 */
sema.tree.block = function(selector,properties){

	this.selector = Array.isArray(selector)? selector : [];
	this.properties = Array.isArray(properties)? properties : [];
	
	this.render = function(){
		
		var me = this;
		
		// if block has no properties then don't produce any CSS
		if(this.properties.length==0)
			return '';
			
		// get selector string
		var selector = this.selector
							.map(function(item,index){
								
								/* if there is two selectors backtoback
								 * we have to add a space btween them
								 */
								var prefix = index>0
											&&(!item.isSeparator())
											&&(!me.selector[index-1].isSeparator())
											? ' '
											: '';
								
								/* now translate this selector if it is
								 * a pseudo selector like 
								 * active,hover...etc
								 */
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
