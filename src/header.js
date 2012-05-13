/*
 * author : Emad Elsaid <blazeeboy@gmail.com>
 * version : @VERSION
 */
var sema = new Object();
sema.translate = function(type,word){
	console.log(type,word);
	return word;
}
sema.tree = {};
