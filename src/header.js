/*
 * 		version : @VERSION
 *      header.js
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
 *      @Description : this is main sema file, it will include the library
 * 		heirarchy, initial objects to be filled with backages like tree 
 * 		classes and sema utilities.
 * 		@Package : Sema
 */
 
/**
 * main sema object all sema objects,classes will be in that namespace
 * so as not to populate javascript global namespace with object and
 * prevent conflict with user code
 */
var sema = new Object();

/**
 * utilities object, it will hold objects sema need to translate,evaluate
 * the text, we'll consider the utilities as a base layer sema will be
 * built over it, contains all we need to make the main parser,lexical 
 * analyzer and compile,
 * objects in this layer can depent on each other or natie javascript
 * API, they cannot use anyhing from the higher layer (tree, parser..etc)
 */
sema.utils = {};

/**
 * sema tree is the main sema component, as the lexical analyzer will 
 * convert sema text into tokens and convert each tocken into the
 * apropriate tree object, each tree object has a render method that
 * will return the CSS alternative of the object, so the tree will call
 * this render recursively down to leaves and form the CSS alternative 
 * of this tree then return it to be injected.
 */
sema.tree = {};
