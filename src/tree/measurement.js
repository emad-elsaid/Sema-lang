/*
 *      measurement.js
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
 *      @Description : represent a numberfollowed by measurement token
 * 		@Package : Sema Tree
 */

sema.tree.measurement = function(value){
	
	// measurement token e.g 1px 20cm
	this.value = value;
	
	/**
	 * convert the measurement to css alternative
	 * and translate the measurement usint into english
	 */
	this.render = function(){
		
		// get the measurement unit
		var unit = this.value.match(/[^0-9\.\-]+$/);
		
		if( unit!=null && unit.length>0 ){
			unit = unit[0];
		
			// translate teh unit to the css alternative
			var t_unit = sema.utils.translator.translate(unit);
			
			// replace the translated token with the older one
			return this.value.replace(unit,t_unit);
		}
		
		return this.value;
	}
}
