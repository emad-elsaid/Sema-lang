/*  
 *  ddr-ECMA5 JavaScript library, version 1.2.2RC
 *  (c) 2010 David de Rosier
 *
 *  Licensed under the MIT license.
 *  http://www.opensource.org/licenses/mit-license.php
 *
 *  Revision: 26
 *  Date: 04.08.2011
 */
(function(global,undefined){"use strict";var __features={STRING_INDEX_ENUMERABLE:"abc".propertyIsEnumerable("1"),ACCESSORS:Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__,DOM:typeof window==='object'&&typeof document==='object'};var __propertyIsEnumerable=function(obj,property){if(obj.propertyIsEnumerable){return obj.propertyIsEnumerable(property)}for(var key in obj){if(key===property&&(obj.hasOwnProperty?obj.hasOwnProperty(property):true)){return true}}return false};Function.prototype.bind||(Function.prototype.bind=function(ctx){if(typeof this!=='function')throw new TypeError("'this' is not a function");var fn=this,args=$AP.slice.call(arguments,1);return function(){return fn.apply(ctx,args.concat(Array.prototype.slice.call(arguments)))}});String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^\s\s*/,'').replace(/\s\s*$/,'')});Array.isArray||(Array.isArray=function(obj){return Object.prototype.toString.call(obj)==="[object Array]"||(obj instanceof Array)});var $AP=Array.prototype;$AP.indexOf||($AP.indexOf=function(searchElement){var len=this.length,i=+arguments[1]||0;if(len===0||isNaN(i)||i>=len)return-1;if(i<0){i=len+i;i<0&&(i=0)}for(;i<len;++i){if(this.hasOwnProperty(String(i))&&this[i]===searchElement)return i}return-1});$AP.lastIndexOf||($AP.lastIndexOf=function(searchElement){var len=this.length,i=+arguments[1]||len-1;if(len===0||isNaN(i))return-1;if(i<0){i=len+i}else if(i>=len){i=len-1}for(;i>=0;--i){if(this.hasOwnProperty(String(i))&&this[i]===searchElement)return i}return-1});$AP.every||($AP.every=function(callback){if(!__isCallable(callback))throw new TypeError(callback+" is not a callable object");var thisArg=arguments[1];for(var i=0,len=this.length;i<len;++i){if(this.hasOwnProperty(String(i))){if(!callback.call(thisArg,this[i],i,this))return false}}return true});$AP.some||($AP.some=function(callback){if(!__isCallable(callback))throw new TypeError(callback+" is not a callable object");var thisArg=arguments[1];for(var i=0,len=this.length;i<len;++i){if(this.hasOwnProperty(String(i))){if(callback.call(thisArg,this[i],i,this))return true}}return false});$AP.forEach||($AP.forEach=function(callback){if(!__isCallable(callback))throw new TypeError(callback+" is not a callable object");var thisArg=arguments[1];for(var i=0,len=this.length;i<len;++i){if(this.hasOwnProperty(String(i))){callback.call(thisArg,this[i],i,this)}}});$AP.map||($AP.map=function(callback){if(!__isCallable(callback))throw new TypeError(callback+" is not a callable object");var thisArg=arguments[1],len=this.length,results=new Array(len);for(var i=0;i<len;++i){if(this.hasOwnProperty(String(i))){results[i]=callback.call(thisArg,this[i],i,this)}}return results});$AP.filter||($AP.filter=function(callback){if(!__isCallable(callback))throw new TypeError(callback+" is not a callable object");var thisArg=arguments[1],len=this.length,results=[];for(var i=0;i<len;++i){if(this.hasOwnProperty(String(i))){callback.call(thisArg,this[i],i,this)&&results.push(this[i])}}return results});$AP.reduce||($AP.reduce=function(callback){if(!__isCallable(callback))throw new TypeError(callback+" is not a callable object");var len=this.length;if(len===0&&arguments.length<2)throw new TypeError("reduce of empty array with no initial value");var initIdx=-1;if(arguments.length<2){if((initIdx=__firstIndex(this))===-1)throw new TypeError("reduce of empty array with no initial value");}var val=arguments.length>1?arguments[1]:this[initIdx];for(var i=initIdx+1;i<len;++i){if(this.hasOwnProperty(String(i))){val=callback(val,this[i],i,this)}}return val});$AP.reduceRight||($AP.reduceRight=function(callback){if(!__isCallable(callback))throw new TypeError(callback+" is not a callable object");var len=this.length;if(len===0&&arguments.length<2)throw new TypeError("reduce of empty array with no initial value");var initIdx=len;if(arguments.length<2){for(var k=len-1;k>=0;--k){if(this.hasOwnProperty(String(k))){initIdx=k;break}}if(initIdx===len)throw new TypeError("reduce of empty array with no initial value");}var val=arguments.length>1?arguments[1]:this[initIdx];for(var i=initIdx-1;i>=0;--i){if(this.hasOwnProperty(String(i))){val=callback(val,this[i],i,this)}}return val});Date.now||(Date.now=function(){return+new Date});Date.prototype.toISOString||(Date.prototype.toISOString=(function(){var str=function(n,l){var str=String(n),len=l||2;while(str.length<len)str='0'+str;return str};return function(){return isFinite(this.getTime())?String(this.getUTCFullYear()).concat('-',str(this.getUTCMonth()+1),"-",str(this.getUTCDate()),"T",str(this.getUTCHours()),":",str(this.getUTCMinutes()),":",str(this.getUTCSeconds()),".",str(this.getUTCMilliseconds(),3),"Z"):'Invalid Date'}})());Date.prototype.toJSON||(Date.prototype.toJSON=function(key){if(!isFinite(this))return null;if(!this.toISOString||typeof this.toISOString!=='function')throw new TypeError("Date.prototype.toJSON called on incompatible "+(typeof this));return this.toISOString()});if(!Object.getPrototypeOf){if("".__proto__){Object.getPrototypeOf=function(obj){if(!__isObject(obj))throw new TypeError(obj+" is not an object");return obj.__proto__}}else{Object.getPrototypeOf=function(obj){if(!__isObject(obj))throw new TypeError(obj+" is not an object");return obj.constructor?obj.constructor.prototype:null}}}Object.create||(Object.create=(function(){var __TmpConstructor=function(){};return function(proto,properties){if(!__isObject(proto))throw new TypeError(proto+" is not an object");__TmpConstructor.prototype=proto;var obj=new __TmpConstructor();properties&&Object.defineProperties(obj,properties);return obj}})());Object.isSealed||(Object.isSealed=function(obj){if(!__isObject(obj))throw new TypeError(obj+" is not an object");return false});Object.isFrozen||(Object.isFrozen=function(obj){if(!__isObject(obj))throw new TypeError(obj+" is not an object");return false});Object.isExtensible||(Object.isExtensible=function(obj){if(!__isObject(obj))throw new TypeError(obj+" is not an object");return true});Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=(function(){var __NUMBER_CONSTS=['MAX_VALUE','MIN_VALUE','NaN','POSITIVE_INFINITY','NEGATIVE_INFINITY'],__MATH_CONSTS=['PI','E','LN2','LOG2E','LOG10E','SQRT1_2','SQRT2'];return function(obj,pname){if(!__isObject(obj))throw new TypeError(obj+" is not an object");if(!(pname in obj))return;var editable=true,configurable=true;if((obj===Number&&__NUMBER_CONSTS.indexOf(pname)>=0)||(obj===Math&&__MATH_CONSTS.indexOf(pname)>=0)||(pname=='length'&&(obj===String.prototype||__isString(obj)||obj===Function.prototype||obj instanceof Function))){editable=false;configurable=false}else if(pname=='length'&&(obj===Array.prototype||Array.isArray(obj))){configurable=false}return{writable:editable,enumerable:__propertyIsEnumerable(obj,pname),configurable:configurable,value:obj[pname]}}})());(!Object.defineProperty||!Object.defineProperties)&&(function(){var __applyDefaults=function(desc,defaultValue,value){if(desc.hasOwnProperty("get")||desc.hasOwnProperty("set")){throw new TypeError("Getters and setters are not supported by this ECMAScript engine");}else{desc.writable=desc.hasOwnProperty('writable')?desc.writable:defaultValue;desc.value=desc.hasOwnProperty('value')?desc.value:value}desc.enumerable=desc.hasOwnProperty('enumerable')?desc.enumerable:defaultValue;desc.configurable=desc.hasOwnProperty('configurable')?desc.configurable:defaultValue;var t=null;if((!desc[t="configurable"])||(!desc[t="enumerable"])||(!desc[t="writable"])){throw new TypeError("Property '".concat(t,"' cannot be set to false in this version of ECMAScript engine"));}return desc};if(!Object.defineProperty){Object.defineProperty=function(obj,property,descriptor){if(!__isObject(obj))throw new TypeError(obj+" is not an object");var pname=String(property);var desc=__toPropertyDescriptor(descriptor);desc=__applyDefaults(desc,obj.hasOwnProperty(pname),obj[pname]);obj[pname]=desc.value;return obj};Object.defineProperty.DDRECMA5=true}if(!Object.defineProperties){Object.defineProperties=function(obj,properties){if(!__isObject(obj))throw new TypeError(obj+" is not an object");var properties=Object(properties);var descriptors={};for(var key in properties){if(properties.hasOwnProperty(key)){var desc=__toPropertyDescriptor(properties[key]);descriptors[key]=__applyDefaults(desc,obj.hasOwnProperty(key),obj[key])}}for(key in descriptors){if(properties.hasOwnProperty(key)){obj[key]=descriptors[key].value}}return obj};Object.defineProperties.DDRECMA5=true}})();Object.keys||(Object.keys=function(obj){if(!__isObject(obj))throw new TypeError(obj+" is not an object");var results=[];for(var key in obj){(obj.hasOwnProperty?obj.hasOwnProperty(key):key in obj)&&results.push(key)}if(__isString(obj)&&!__features.STRING_INDEX_ENUMERABLE){for(var i=0,len=obj.length;i<len;++i){results.push(String(i))}}return results});!Object.getOwnPropertyNames&&(function(){var __notEnumerableProperties=(function(){var props=[{object:Object,keys:['getOwnPropertyNames','seal','create','isFrozen','keys','isExtensible','getOwnPropertyDescriptor','preventExtensions','getPrototypeOf','defineProperty','isSealed','defineProperties','freeze']},{object:Object.prototype,keys:['toString','__lookupGetter__','__defineGetter__','toLocaleString','hasOwnProperty','valueOf','__defineSetter__','propertyIsEnumerable','isPrototypeOf','__lookupSetter__']},{object:Function.prototype,keys:['bind','arguments','toString','length','call','name','apply','caller']},{object:Number,keys:['NaN','NEGATIVE_INFINITY','POSITIVE_INFINITY','MAX_VALUE','MIN_VALUE']},{object:Number.prototype,keys:['toExponential','toString','toLocaleString','toPrecision','valueOf','toFixed']},{object:String,keys:['fromCharCode']},{object:String.prototype,keys:['length','concat','localeCompare','substring','italics','charCodeAt','strike','indexOf','toLowerCase','trimRight','toString','toLocaleLowerCase','replace','toUpperCase','fontsize','trim','split','substr','sub','charAt','blink','lastIndexOf','sup','fontcolor','valueOf','link','bold','anchor','trimLeft','small','search','fixed','big','match','toLocaleUpperCase','slice']},{object:Boolean.prototype,keys:['toString','valueOf']},{object:Date,keys:['now','UTC','parse']},{object:Date.prototype,keys:['toUTCString','setMinutes','setUTCMonth','getMilliseconds','getTime','getMinutes','getUTCHours','toString','setUTCFullYear','setMonth','getUTCMinutes','getUTCDate','setSeconds','toLocaleDateString','getMonth','toTimeString','toLocaleTimeString','setUTCMilliseconds','setYear','getUTCFullYear','getFullYear','getTimezoneOffset','setDate','getUTCMonth','getHours','toLocaleString','toISOString','toDateString','getUTCSeconds','valueOf','setUTCMinutes','getUTCDay','toJSON','setUTCDate','setUTCSeconds','getYear','getUTCMilliseconds','getDay','setFullYear','setMilliseconds','setTime','setHours','getSeconds','toGMTString','getDate','setUTCHours']},{object:RegExp,keys:['$*','$`','$input','$+','$&',"$'",'$_']},{object:RegExp.prototype,keys:['toString','exec','compile','test']},{object:Error.prototype,keys:['toString']},{object:Math,keys:['LN10','PI','E','LOG10E','SQRT2','LOG2E','SQRT1_2','LN2','cos','pow','log','tan','sqrt','ceil','asin','abs','max','exp','atan2','random','round','floor','acos','atan','min','sin']},{object:global,keys:['TypeError','decodeURI','parseFloat','Number','URIError','encodeURIComponent','RangeError','ReferenceError','RegExp','Array','isNaN','Date','Infinity','Boolean','Error','NaN','String','Function','Math','undefined','encodeURI','escape','unescape','decodeURIComponent','EvalError','SyntaxError','Object','eval','parseInt','JSON','isFinite']},{test:function(obj){return typeof JSON!=='undefined'&&obj===JSON},keys:['stringify','parse']},{test:function(obj){return Array.isArray(obj)||__isString(obj)},keys:['length']},{test:function(obj){return obj instanceof RegExp},testValue:new RegExp('.+'),keys:['lastIndex','multiline','global','source','ignoreCase']},{test:function(obj){return typeof obj==='function'&&obj.apply&&obj.call},testValue:function(a,b,c){},keys:['arguments','length','name','prototype','caller']}];for(var i=0,ilen=props.length;i<ilen;++i){if(props[i].object){if(typeof props[i].object==='function'){props[i].keys.push('arguments','length','name','prototype','caller')}else if(typeof props[i].object==='object'&&props[i].object!==Math&&props[i].object!==global){props[i].keys.push('constructor')}for(var j=props[i].keys.length-1;j>=0;--j){if(!(props[i].keys[j]in props[i].object)||__propertyIsEnumerable(props[i].object,props[i].keys[j])){props[i].keys.splice(j,1)}}}else if(props[i].test&&props[i].testValue&&props[i].test(props[i].testValue)){for(var j=props[i].keys.length-1;j>=0;--j){if(!(props[i].keys[j]in props[i].testValue)||__propertyIsEnumerable(props[i].testValue,props[i].keys[j])){props[i].keys.splice(j,1)}}delete props[i].testValue}}return props})();var __len=__notEnumerableProperties.length;Object.getOwnPropertyNames=function(obj){var keys=Object.keys(obj);for(var i=0;i<__len;++i){if((__notEnumerableProperties[i].object&&__notEnumerableProperties[i].object===obj)||(__notEnumerableProperties[i].test&&__notEnumerableProperties[i].test(obj))){keys=keys.concat(__notEnumerableProperties[i].keys);break}}return keys}})();var __isObject=function(obj){return obj&&(typeof obj==='object'||typeof obj==='function')};var __isString=function(obj){return typeof obj==='string'||Object.prototype.toString.call(obj)==='[object String]'};var __firstIndex=function(arr){for(var k=0,len=arr.length;k<len;++k){if(arr.hasOwnProperty(String(k))){return k}}return-1};var __toPropertyDescriptor=function(obj){if(!obj||typeof obj!=='object')throw new TypeError(obj+" is not an object");var desc={};obj.hasOwnProperty("enumerable")&&(desc.enumerable=!!obj.enumerable);obj.hasOwnProperty("configurable")&&(desc.configurable=!!obj.configurable);obj.hasOwnProperty("writable")&&(desc.writable=!!obj.writable);obj.hasOwnProperty("value")&&(desc.value=obj.value);if(obj.hasOwnProperty("get")){if(!__isCallable(obj.get)&&typeof obj.get!=='undefined')throw new TypeError("Getter must be a callable object");desc.get=obj.get}if(obj.hasOwnProperty("set")){if(!__isCallable(obj.set)&&typeof obj.set!=='undefined')throw new TypeError("Setter must be a callable object");desc.set=obj.set}if((desc.hasOwnProperty("get")||desc.hasOwnProperty("set"))&&(desc.hasOwnProperty("writable")||desc.hasOwnProperty("value"))){throw new TypeError("Invalid property. A property cannot both have accessors and be writable or have a value");}return desc};var __isCallable=(function(){var __sortCase=(function(){try{[].sort('abc');return false}catch(ex){return true}})();return function(obj){if(typeof obj==='function')return true;if(typeof obj!=='object')return false;if(obj instanceof Function||obj instanceof RegExp)return true;if(__sortCase){try{[].sort(obj);return true}catch(ex){}}return false}})()})(this);/*
 * author : Emad Elsaid <blazeeboy@gmail.com>
 * version : 0.1
 */
var sema = new Object();
sema.utils = {};
sema.tree = {};
sema.utils.translator = {

	table:{
		'نشط':'active',
		'بعد':'after',
		'اول':'first',
		'اول-ابن':'first-child',
		'اول-حرف':'first-letter',
		'اول-سطر':'first-line',
		'تركيز':'focus',
		'طفو':'hover',
		'لغة':'lang',
		'يسار':'left',
		'رابط':'link',
		'يمين':'right',
		'مزار':'visited',
		'فوق':'above',
		'حر':'absolute',
		'مسرع':'accelerator',
		'بعد':'after',
		'ضبط-المحاذاة':'alignment-adjust',
		'محاذاة-الخط-الاساس':'alignment-baseline',
		'دائما':'always',
		'حركة':'animation',
		'تاخير-الحركة':'animation-delay',
		'اتجاه-الحركة':'animation-direction',
		'مدة-الحركة':'animation-duration',
		'عدد-تكرار-الحركة':'animation-iteration-count',
		'اسم-الحركة':'animation-name',
		'حالة-تشغيل-الحركة':'animation-play-state',
		'دالة-توقيت-الحركة':'animation-timing-function',
		'المظهر':'appearance',
		'ماء':'aqua',
		'ارمينى':'armenian',
		'خاصية':'attr',
		'تلقائى':'auto',
		'تجنب':'avoid',
		'السمت':'azimuth',
		'رؤية-الوجه-الخلفى':'backface-visibility',
		'الخلفية':'background',
		'التعلق-بالخلفية':'background-attachment',
		'قطع-الخلفية':'background-clip',
		'لون-الخلفية':'background-color',
		'صورة-الخلفية':'background-image',
		'نقطة-اصل-الخلفية':'background-origin',
		'مكان-الخلفية':'background-position',
		'مكان-الخلفية-س':'background-position-x',
		'مكان-الخلفية-ص':'background-position-y',
		'تكرار-الخلفية':'background-repeat',
		'مقاس-الخلفية':'background-size',
		'توازن':'balance',
		'الخط-الاساسى':'baseline',
		'تحريك-خط-الاساس':'baseline-shift',
		'قبل':'before',
		'تصرف':'behavior',
		'خلف':'behind',
		'اسفل':'below',
		'تجاوز-ثنائية-اللغة':'bidi-override',
		'ربط':'binding',
		'اسود':'black',
		'نزيف':'bleed',
		'يومض':'blink',
		'كتلة':'block',
		'ازرق':'blue',
		'سميك':'bold',
		'اكثر-سماكة':'bolder',
		'اسم-المرجعية':'bookmark-label',
		'مستوى-المرجعية':'bookmark-level',
		'حالة-المرجعية':'bookmark-state',
		'هدف-المرجعية':'bookmark-target',
		'الحدود':'border',
		'الحد-السفلى':'border-bottom',
		'لون-الحد-السفلى':'border-bottom-color',
		'نصف-قطر-الحد-السفلى-الايسر':'border-bottom-left-radius',
		'نصف-قطر-الحد-السفلى-الايمن':'border-bottom-right-radius',
		'شكل-الحد-السفلى':'border-bottom-style',
		'عرض-الحد-السفلى':'border-bottom-width',
		'طى-الحدود':'border-collapse',
		'لون-الحدود':'border-color',
		'صورة-الحدود':'border-image',
		'بداية-صورة-الحد':'border-image-outset',
		'تكرار-صورة-الحد':'border-image-repeat',
		'قطع-صورة-الحد':'border-image-slice',
		'مصدر-صورة-الحد':'border-image-source',
		'عرض-صورة-الحد':'border-image-width',
		'الحد-الايسر':'border-left',
		'لون-الحد-الايسر':'border-left-color',
		'شكل-الحد-الايسر':'border-left-style',
		'عرض-الحد-الايسر':'border-left-width',
		'نصف-قطر-الحدود':'border-radius',
		'الحد-الايمن':'border-right',
		'لون-الحد-الايمن':'border-right-color',
		'شكل-الحد-الايمن':'border-right-style',
		'عرض الحد-الايمن':'border-right-width',
		'تباعد-الحدود':'border-spacing',
		'شكل-الحدود':'border-style',
		'الحد-العلوى':'border-top',
		'لون-الحد-العلوى':'border-top-color',
		'نصف-قطر-الحد-العلوى-الايسر':'border-top-left-radius',
		'نصف-قطر-الحد-العلوى-الايمن':'border-top-right-radius',
		'شكل-الحد-العلوى':'border-top-style',
		'عرض-الحد-العلوى':'border-top-width',
		'عرض-الحدود':'border-width',
		'كليهما':'both',
		'اسفل':'bottom',
		'فاصل-زخرفة-الصندوق':'box-decoration-break',
		'ظل-الصندوق':'box-shadow',
		'تحجيم-الصندوق':'box-sizing',
		'بعد-الفاصل':'break-after',
		'قبل-الفاصل':'break-before',
		'على-الفاصل':'break-inside',
		'كتب-بحروف-كبيرة':'capitalize',
		'ارتفاع-الحروف-الكبيرة':'caps-height',
		'جانب-العنونة':'caption-side',
		'وسط':'center',
		'وسط-شمال':'center-left',
		'وسط-يمين':'center-right',
		'تدوير':'circle',
		'صينى-كورى-موحد':'cjk-ideographic',
		'مسح':'clear',
		'تقصيص':'clip',
		'علامات-تنصيص-مقربة':'close-quote',
		'سنتيمتر':'cm',
		'رمز':'code',
		'طي':'collapse',
		'لون':'color',
		'لون-تلميح':'color-profile',
		'عدد-الاعمدة':'column-count',
		'ملئ-الاعمدة':'column-fill',
		'المسافة-بين-الاعمدة':'column-gap',
		'قاعدة-الاعمدة':'column-rule',
		'قاعدة-لون-الاعمدة':'column-rule-color',
		'قاعدة-نمط-الاعمدة':'column-rule-style',
		'قاعدة-عرض-الاعمدة':'column-rule-width',
		'تجاوز-الاعمدة':'column-span',
		'عرض-الاعمدة':'column-width',
		'الاعمدة':'columns',
		'رص':'compact',
		'مكثف':'condensed',
		'الازاحة-مقدرة':'consider-shifts',
		'محتوى':'content',
		'محتوى-الصندوق':'content-box',
		'مستمر':'continuous',
		'عداد':'counter',
		'عداد-مقدر-الزيادة':'counter-increment',
		'اعادة-العداد-للوضع-الاصلي':'counter-reset',
		'العدادات':'counters',
		'قطع':'crop',
		'صليب':'cross',
		'تقاطع':'crosshair',
		'تلميح':'cue',
		'بعد-التلميح':'cue-after',
		'قبل-التلميح':'cue-before',
		'الحالي':'current',
		'سهم':'cursor',
		'متقطع':'dashed',
		'عشري':'decimal',
		'علامة-امام-الصفر':'decimal-leading-zero',
		'افتراضي':'default',
		'ارقام':'digits',
		'اتجاه':'direction',
		'قرص':'disc',
		'اظهار':'display',
		'خط-اساس-سائد':'dominant-baseline',
		'منقط':'dotted',
		'مضاعف':'double',
		'اسقط-البداية-بعد-الضبط':'drop-initial-after-adjust',
		'اسقط-البداية-بعد-المحاذاة':'drop-initial-after-align',
		'اسقط-البداية-قبل-الضبط':'drop-initial-before-adjust',
		'اسقط-البداية-قبل-المحاذاة':'drop-initial-before-align',
		'مقاس-اسقاط-البداية':'drop-initial-size',
		'قيمة-اسقاط-البداية':'drop-initial-value',
		'تحجيم-شرق':'e-resize',
		'سهل':'ease',
		'رفع':'elevation',
		'حرف':'em',
		'ادراج':'embed',
		'الخلايا-الفارغة':'empty-cells',
		'اكس':'ex',
		'متمدد':'expanded',
		'كثيف-اضافى':'extra-condensed',
		'متمدد-اضافى':'extra-expanded',
		'اقصى-اليسار':'far-left',
		'اقصى-اليمين':'far-right',
		'سريع':'fast',
		'اسرع':'faster',
		'فلتر':'filter',
		'مناسب':'fit',
		'مكان-مناسب':'fit-position',
		'ثابت':'fixed',
		'مسطح':'flat',
		'محاذاة-المرن':'flex-align',
		'تدفق-المرن':'flex-flow',
		'حزمة-السطور-المرنة':'flex-line-pack',
		'ترتيب-المرن':'flex-order',
		'حزمة-مرنة':'flex-pack',
		'عائم':'float',
		'بعد-العوم':'float-offset',
		'الخط':'font',
		'عائلة-الخط':'font-family',
		'مقاس-الخط':'font-size',
		'ضبط-مقاس-الخط':'font-size-adjust',
		'مد-الخط':'font-stretch',
		'شكل-الخط':'font-style',
		'اختلاف-الخط':'font-variant',
		'ثقل-الخط':'font-weight',
		'للامام':'forward',
		'ارجوانى':'fuchsia',
		'جورجى':'georgian',
		'رمادى':'gray',
		'اخضر':'green',
		'اعمدة-الشبكة':'grid-columns',
		'صفوف-الشبكة':'grid-rows',
		'اخدود':'groove',
		'تعليق-علامات-التنقيط':'hanging-punctuation',
		'عبرى':'hebrew',
		'الارتفاع':'height',
		'مساعدة':'help',
		'مخفى':'hidden',
		'اخفى':'hide',
		'عالى':'high',
		'اعلى':'higher',
		'هيراجانا':'hiragana',
		'هيراجانا-ايروها':'hiragana-iroha',
		'وصلة-بعدها':'hyphenate-after',
		'وصلة-قبلها':'hyphenate-before',
		'حرف-الوصلة':'hyphenate-character',
		'سطور-موصلة':'hyphenate-lines',
		'مصدر-موصل':'hyphenate-resource',
		'وصلات':'hyphens',
		'ايقونة':'icon',
		'توجيه-الصورة':'image-orientation',
		'اظهار-الصورة':'image-rendering',
		'دقة-الصورة':'image-resolution',
		'نمط-محرر-الحروف':'ime-mode',
		'انش':'in',
		'تضمين-مصدر':'include-source',
		'ضمنى':'inline',
		'محاذاة-صندوق-ضمنى':'inline-box-align',
		'ارتفاع-صندوق-ضمنى':'inline-line-height',
		'جدول-ضمنى':'inline-table',
		'درج':'inset',
		'داخلى':'inside',
		'عكس':'invert',
		'مائل':'italic',
		'محاذاة':'justify',
		'كاتاكانا':'katakana',
		'كاتاكانا-ايروها':'katakana-iroha',
		'مشهد-عرضى':'landscape',
		'كبير':'large',
		'اكبر':'larger',
		'الاخير':'last',
		'لون-خلفية-الطبقة':'layer-background-color',
		'صورة-خلفية-الطبقة':'layer-background-image',
		'تدفق-التصميم':'layout-flow',
		'تصميم-الشبكة':'layout-grid',
		'تصميم-حرف-الشبكة':'layout-grid-char',
		'تصميم-تباعد-حرف-الشبكة':'layout-grid-char-spacing',
		'تصميم-سطر-الشبكة':'layout-grid-line',
		'نمط-تصميم-الشبكة':'layout-grid-mode',
		'نوع-تصميم-الشبكة':'layout-grid-type',
		'يسار':'left',
		'الجانب-الايسر':'left-side',
		'اتجاه-اليسار':'leftwards',
		'تباعد-الحروف':'letter-spacing',
		'المستوى':'level',
		'اخف':'lighter',
		'ليمونى':'lime',
		'فاصل-السطر':'line-break',
		'ارتفاع-السطر':'line-height',
		'تراص-السطور':'line-stacking',
		'إزاحة-تراص-السطور':'line-stacking-shift',
		'استراتيجية-تراص-السطور':'line-stacking-strategy',
		'خط-وسط':'line-through',
		'عنصر-قائمة':'list-item',
		'شكل-القائمة':'list-style',
		'صورة-شكل-القائمة':'list-style-image',
		'مكان-شكل-القائمة':'list-style-position',
		'نوع-شكل-القائمة':'list-style-type',
		'صاخب':'loud',
		'منخفض':'low',
		'اكتر-انخفاض':'lower',
		'حروف-ارقام-صغيرة':'lower-alpha',
		'يونانى-صغير':'lower-greek',
		'لاتينى-صغير':'lower-latin',
		'رومانى-صغير':'lower-roman',
		'حروف-صغيرة':'lowercase',
		'من-اليسار-لليمين':'ltr',
		'الهامش':'margin',
		'الهامش-السفلى':'margin-bottom',
		'الهامش-الايسر':'margin-left',
		'الهامش-الايمن':'margin-right',
		'الهامش-العلوى':'margin-top',
		'علامة':'marker',
		'بعد-العلامة':'marker-offset',
		'علامات':'marks',
		'نبيتى':'maroon',
		'اتجاه-الشريط':'marquee-direction',
		'دورة-الشريط':'marquee-loop',
		'عدد-مرات-تشغيل-الشريط':'marquee-play-count',
		'شرعة-الشريط':'marquee-speed',
		'شكل-الشريط':'marquee-style',
		'اكبر-ارتفاع':'max-height',
		'اكبر-عرض':'max-width',
		'متوسط':'medium',
		'وسط':'middle',
		'اقل-ارتفاع':'min-height',
		'اقل-عرض':'min-width',
		'مزيج':'mix',
		'ملليمتر':'mm',
		'معتدل':'moderate',
		'تحريك':'move',
		'حرك-الى':'move-to',
		'تحجيم-شمال':'n-resize',
		'ضيق':'narrower',
		'انتقال-للاسفل':'nav-down',
		'انتقال-للفهرس':'nav-index',
		'انتقال-لليسار':'nav-left',
		'انتقال-لليمين':'nav-right',
		'انتقال-للاعلى':'nav-up',
		'كحلى':'navy',
		'تحجيم-شمال-الشرقى':'ne-resize',
		'بدون-اغلاق-علامة-تنصيص':'no-close-quote',
		'بدون-حدود':'no-limit',
		'بدون-فتح-علامة-تنصيص':'no-open-quote',
		'بدون-تكرار':'no-repeat',
		'بدون':'none',
		'عادى':'normal',
		'بدون-التفاف':'nowrap',
		'تحجيم-الشمال-الغربى':'nw-resize',
		'مائل':'oblique',
		'زيتونى':'olive',
		'مرة':'once',
		'الشفافية':'opacity',
		'فتح':'open',
		'فتح-علامة-تنصيص':'open-quote',
		'يتامى':'orphans',
		'الخط-الخارجى':'outline',
		'لون-الخط-الخارجى':'outline-color',
		'بعد-الخط-الخارجى':'outline-offset',
		'شكل-الخط-الخارجى':'outline-style',
		'سمك-الخط-الخارجى':'outline-width',
		'بداية':'outset',
		'خارج':'outside',
		'الزيادة':'overflow',
		'شكل-الزيادة':'overflow-style',
		'التفاف-الزيادة':'overflow-wrap',
		'زيادة-س':'overflow-x',
		'زيادة-ص':'overflow-y',
		'فوقه-خط':'overline',
		'التبطين':'padding',
		'التبطين-السفلى':'padding-bottom',
		'التبطين-الايسر':'padding-left',
		'التبطين-الايمن':'padding-right',
		'التبطين-العلوى':'padding-top',
		'صفحة':'page',
		'فاصل-الصفحة-بعد':'page-break-after',
		'فاصل-الصفحة-قبل':'page-break-before',
		'فاصل-الصفحة-للداخل':'page-break-inside',
		'سياسة-الصفحة':'page-policy',
		'توقف':'pause',
		'توقف-بعد':'pause-after',
		'توقف-قبل':'pause-before',
		'بيكا':'pc',
		'المنظور':'perspective',
		'نقطة-اصل-المنظور':'perspective-origin',
		'نبرات':'phonemes',
		'نغمة':'pitch',
		'مدى-النغمة':'pitch-range',
		'فترة-التشغيل':'play-during',
		'المؤشر':'pointer',
		'مكان':'position',
		'لوحة':'portrait',
		'سابقة':'pre',
		'مستوى-العرض':'presentation-level',
		'نقطة':'pt',
		'قطع-علامات-الترقيم':'punctuation-trim',
		'بنفسجى':'purple',
		'بيكسل':'px',
		'علامات-الاقتباس':'quotes',
		'مستطيل':'rect',
		'احمر':'red',
		'نسبى':'relative',
		'نية-الاظهار':'rendering-intent',
		'تكرار':'repeat',
		'تكرار-س':'repeat-x',
		'تكرار-ص':'repeat-y',
		'تحجيم':'resize',
		'استراحة':'rest',
		'استرح-بعد':'rest-after',
		'استرح-قبل':'rest-before',
		'ثراء':'richness',
		'ناتىء':'ridge',
		'يمين':'right',
		'الجانب-الايمن':'right-side',
		'اتجاه-اليمين':'rightwards',
		'تدوير':'rotation',
		'نقطة-التدوير':'rotation-point',
		'صف':'row',
		'من-اليمين-لليسار':'rtl',
		'تشغيل-داخلى':'run-in',
		'تشغيل':'running',
		'تحجيم-جنوب':'s-resize',
		'تمرير':'scroll',
		'لون-ضوء-3دى-لشريط-التمرير':'scrollbar-3d-light-color',
		'لون-السهم-لشريط-التمرير':'scrollbar-arrow-color',
		'لون-الاساس-لشريط-التمرير':'scrollbar-base-color',
		'لون-الظل-الغامق-لشريط-التمرير':'scrollbar-dark-shadow-color',
		'لون-وجه-شريط-التمرير':'scrollbar-face-color',
		'لون-شوء-شريط-التمرير':'scrollbar-highlight-color',
		'لون-ظل-شريط-التمرير':'scrollbar-shadow-color',
		'لون-مسار-شريط-التمرير':'scrollbar-track-color',
		'تحجيم-جنوب-شرقى':'se-resize',
		'شبه-كثيف':'semi-condensed',
		'شبه-متمدد':'semi-expanded',
		'فصل':'separate',
		'عرض':'show',
		'صامت':'silent',
		'فضى':'silver',
		'مقاس':'size',
		'قطع':'slice',
		'بطىء':'slow',
		'ابطا':'slower',
		'صغير':'small',
		'خط-صغير':'small-caps',
		'اصغر':'smaller',
		'ناعم':'soft',
		'مصمت':'solid',
		'تحدث':'speak',
		'تحدث-الراس':'speak-header',
		'تحدث-الارقام':'speak-numeral',
		'تحدث-علامات-الترقيم':'speak-punctuation',
		'معدل-الحديث':'speech-rate',
		'نطق-موضح':'spell-out',
		'مربع':'square',
		'ابدا':'start',
		'ساكن':'static',
		'ضغط':'stress',
		'تمديد':'stretch',
		'مجموعة-نص':'string-set',
		'منخفض':'sub',
		'مرتفع':'super',
		'تحجيم-الجنوب-الغربى':'sw-resize',
		'مقاس-مسافة-الجدولة':'tab-size',
		'جدول':'table',
		'عنوان-جدول':'table-caption',
		'خلية-جدول':'table-cell',
		'عمود-جدول':'table-column',
		'مجموعة-اعمدة-جدول':'table-column-group',
		'مجموعة-ذيل-جدول':'table-footer-group',
		'مجموعة-راس-جدول':'table-header-group',
		'تخطيط-جدول':'table-layout',
		'صف-جدول':'table-row',
		'مجموعة-صفوف-جدول':'table-row-group',
		'الهدف':'target',
		'اسم-الهدف':'target-name',
		'هدف-جديد':'target-new',
		'مكان-الهدف':'target-position',
		'بترولى':'teal',
		'النص':'text',
		'النص-بعد-الحافة':'text-after-edge',
		'محا	ذاة-النص':'text-align',
		'محاذاة-نهاية-النص':'text-align-last',
		'مافة-النص-التلقائية':'text-autospace',
		'النص-قبل-الحافة':'text-before-edge',
		'اسفل-النص':'text-bottom',
		'زخرفة-النص':'text-decoration',
		'لون-زخرفة-النص':'text-decoration-color',
		'خط-زخرفة-النص':'text-decoration-line',
		'تخطى-زخرفة-النص':'text-decoration-skip',
		'شكل-شخرفة-النص':'text-decoration-style',
		'تشديد-النص':'text-emphasis',
		'لون-تشديد-النص':'text-emphasis-color',
		'مكان-تشديد-النص':'text-emphasis-position',
		'شكل-تشديد-النص':'text-emphasis-style',
		'ارتفاع-النص':'text-height',
		'بادئة-النص':'text-indent',
		'محاذاة-النص':'text-justify',
		'مسافة-كاشيدة-النص':'text-kashida-space',
		'الخط-الخارجى-للنص':'text-outline',
		'زيادة-النص':'text-overflow',
		'ظل-النص':'text-shadow',
		'طى-مسافات-النص':'text-space-collapse',
		'اعلى-النص':'text-top',
		'تحول-النص':'text-transform',
		'مكان-الخط-تحت-النص':'text-underline-position',
		'التفاف-النص':'text-wrap',
		'تخين':'thick',
		'رفيع':'thin',
		'اعلى':'top',
		'التحول':'transform',
		'نقطة-اصل-التحول':'transform-origin',
		'شكل-التحول':'transform-style',
		'التحريك':'transition',
		'تاخير-التحريك':'transition-delay',
		'مدة-التحريك':'transition-duration',
		'خاصية-التحريك':'transition-property',
		'دالة-توقيت-التحريك':'transition-timing-function',
		'شفاف':'transparent',
		'كثيف-بشدة':'ultra-condensed',
		'متمدد-بشدة':'ultra-expanded',
		'تحته-سطر':'underline',
		'يونيكود-ثنائى-الاتجاه':'unicode-bidi',
		'حروف-ارقام-كبيرة':'upper-alpha',
		'لاتينية-كبيرة':'upper-latin',
		'رومانية-كبيرة':'upper-roman',
		'حروف-كبيرة':'uppercase',
		'عنوان':'url',
		'المحاذاة-الراسية':'vertical-align',
		'العرض':'visibility',
		'معروض':'visible',
		'توازن-الصوت':'voice-balance',
		'مدة-الصوت':'voice-duration',
		'عائلة-الصوت':'voice-family',
		'نغمة-الصوت':'voice-pitch',
		'نطاق-نغمة-الصوت':'voice-pitch-range',
		'معدل-الصوت':'voice-rate',
		'ضغط-الصوت':'voice-stress',
		'علو-الصوت':'voice-volume',
		'العلو':'volume',
		'تحجيم-للغرب':'w-resize',
		'انتظار':'wait',
		'ابيض':'white',
		'الفراغ':'white-space',
		'اعرض':'wider',
		'العرض':'width',
		'نوافذ':'window',
		'فاصل-الكلمات':'word-break',
		'تباعد-الكلمات':'word-spacing',
		'التفاف-الكلمة':'word-wrap',
		'نمط-الكتابة':'writing-mode',
		'سريع-جدى':'x-fast',
		'عالى-جدا':'x-high',
		'كبير-جدا':'x-large',
		'صاخب-جدا':'x-loud',
		'خافت-جدا':'x-low',
		'بطىء-جدا':'x-slow',
		'صغير-جدا':'x-small',
		'ناعم-جدا':'x-soft',
		'كبير-جدا-جدا':'xx-large',
		'ضغير-جدا-جدا':'xx-small',
		'اصفر':'yellow',
		'البعد-ع':'z-index',
		'تقريب':'zoom',
	},

	translate: function(identifier){
		return this.table[identifier]!=undefined
					? this.table[identifier]
					: identifier;
	}
	
};

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
								return (
									index>0
									&&(!item.isSeparator())
									&&(!me.selector[index-1].isSeparator())
									? ' '
									: ''
								) + item.render();
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
sema.tree.func = function(name,params){
	
	this.name = name;
	this.params = Array.isArray(params)? params : [];
	
	this.render = function(){
		return this.name+'('+this.params.join(',')+')';
	}
}
sema.tree.property = function(name,value,important){
	
	this.name = typeof name == "string" ? name : '';
	this.value = Array.isArray(value) ? value : [];
	this.important = important;
	
	this.render = function(){
		var name = sema.utils.translator.translate(this.name);
		var value = this.value
						.map(function(item){ return typeof item=="string"? item : item.render();  })
						.join(' ');
		var important = this.important? ' !important':'';					
		
		return name+':'+value+important+';';
	}
}
sema.tree.selector = function(identifier){
	
	this.identifier = typeof identifier == 'string' ? identifier : '';
	
	this.getIdentifier = function(){
		return this.identifier;
	}
	
	this.render = function(){
		return this.identifier;
	}
	
	this.isSeparator = function(){
		var identifier = this.identifier.trim();
		return ['#','>','.',':',','].indexOf(identifier)>-1;
	}
}

sema.parse = function(src){
	var result;

/*
	Default template driver for JS/CC generated parsers running as
	browser-based JavaScript/ECMAScript applications.
	
	WARNING: 	This parser template will not run as console and has lesser
				features for debugging than the console derivates for the
				various JavaScript platforms.
	
	Features:
	- Parser trace messages
	- Integrated panic-mode error recovery
	
	Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
	
	This is in the public domain.
*/

var _dbg_withtrace		= false;
var _dbg_string			= new String();

function __dbg_print( text )
{
	_dbg_string += text + "\n";
}

function __lex( info )
{
	var state		= 0;
	var match		= -1;
	var match_pos	= 0;
	var start		= 0;
	var pos			= info.offset + 1;

	do
	{
		pos--;
		state = 0;
		match = -2;
		start = pos;

		if( info.src.length <= start )
			return 29;

		do
		{

switch( state )
{
	case 0:
		if( ( info.src.charCodeAt( pos ) >= 9 && info.src.charCodeAt( pos ) <= 10 ) || info.src.charCodeAt( pos ) == 13 ) state = 1;
		else if( info.src.charCodeAt( pos ) == 35 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 37 || ( info.src.charCodeAt( pos ) >= 45 && info.src.charCodeAt( pos ) <= 46 ) || ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) || ( info.src.charCodeAt( pos ) >= 1569 && info.src.charCodeAt( pos ) <= 1641 ) ) state = 3;
		else if( info.src.charCodeAt( pos ) == 40 ) state = 4;
		else if( info.src.charCodeAt( pos ) == 41 ) state = 5;
		else if( info.src.charCodeAt( pos ) == 42 ) state = 6;
		else if( info.src.charCodeAt( pos ) == 44 ) state = 7;
		else if( info.src.charCodeAt( pos ) == 58 ) state = 8;
		else if( info.src.charCodeAt( pos ) == 59 || info.src.charCodeAt( pos ) == 1563 ) state = 9;
		else if( info.src.charCodeAt( pos ) == 62 ) state = 10;
		else if( info.src.charCodeAt( pos ) == 123 ) state = 11;
		else if( info.src.charCodeAt( pos ) == 125 ) state = 12;
		else if( info.src.charCodeAt( pos ) == 33 ) state = 16;
		else if( info.src.charCodeAt( pos ) == 32 ) state = 17;
		else if( info.src.charCodeAt( pos ) == 34 ) state = 19;
		else if( info.src.charCodeAt( pos ) == 39 ) state = 21;
		else if( info.src.charCodeAt( pos ) == 47 ) state = 22;
		else state = -1;
		break;

	case 1:
		state = -1;
		match = 1;
		match_pos = pos;
		break;

	case 2:
		state = -1;
		match = 7;
		match_pos = pos;
		break;

	case 3:
		if( info.src.charCodeAt( pos ) == 37 || ( info.src.charCodeAt( pos ) >= 45 && info.src.charCodeAt( pos ) <= 46 ) || ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) || ( info.src.charCodeAt( pos ) >= 65 && info.src.charCodeAt( pos ) <= 90 ) || info.src.charCodeAt( pos ) == 95 || ( info.src.charCodeAt( pos ) >= 97 && info.src.charCodeAt( pos ) <= 122 ) || ( info.src.charCodeAt( pos ) >= 1569 && info.src.charCodeAt( pos ) <= 1641 ) ) state = 3;
		else state = -1;
		match = 2;
		match_pos = pos;
		break;

	case 4:
		state = -1;
		match = 11;
		match_pos = pos;
		break;

	case 5:
		state = -1;
		match = 12;
		match_pos = pos;
		break;

	case 6:
		state = -1;
		match = 14;
		match_pos = pos;
		break;

	case 7:
		state = -1;
		match = 6;
		match_pos = pos;
		break;

	case 8:
		state = -1;
		match = 8;
		match_pos = pos;
		break;

	case 9:
		state = -1;
		match = 13;
		match_pos = pos;
		break;

	case 10:
		state = -1;
		match = 10;
		match_pos = pos;
		break;

	case 11:
		state = -1;
		match = 4;
		match_pos = pos;
		break;

	case 12:
		state = -1;
		match = 5;
		match_pos = pos;
		break;

	case 13:
		state = -1;
		match = 9;
		match_pos = pos;
		break;

	case 14:
		state = -1;
		match = 3;
		match_pos = pos;
		break;

	case 15:
		state = -1;
		match = 15;
		match_pos = pos;
		break;

	case 16:
		if( info.src.charCodeAt( pos ) == 105 ) state = 24;
		else if( info.src.charCodeAt( pos ) == 1605 ) state = 25;
		else state = -1;
		break;

	case 17:
		if( info.src.charCodeAt( pos ) == 35 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 46 ) state = 13;
		else if( info.src.charCodeAt( pos ) == 32 ) state = 23;
		else state = -1;
		match = 1;
		match_pos = pos;
		break;

	case 18:
		if( info.src.charCodeAt( pos ) == 34 ) state = 14;
		else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 33 ) || ( info.src.charCodeAt( pos ) >= 35 && info.src.charCodeAt( pos ) <= 91 ) || ( info.src.charCodeAt( pos ) >= 93 && info.src.charCodeAt( pos ) <= 1699 ) ) state = 19;
		else if( info.src.charCodeAt( pos ) == 92 ) state = 26;
		else state = -1;
		match = 3;
		match_pos = pos;
		break;

	case 19:
		if( info.src.charCodeAt( pos ) == 34 ) state = 14;
		else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 33 ) || ( info.src.charCodeAt( pos ) >= 35 && info.src.charCodeAt( pos ) <= 91 ) || ( info.src.charCodeAt( pos ) >= 93 && info.src.charCodeAt( pos ) <= 1699 ) ) state = 19;
		else if( info.src.charCodeAt( pos ) == 92 ) state = 26;
		else state = -1;
		break;

	case 20:
		if( info.src.charCodeAt( pos ) == 39 ) state = 14;
		else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 38 ) || ( info.src.charCodeAt( pos ) >= 40 && info.src.charCodeAt( pos ) <= 91 ) || ( info.src.charCodeAt( pos ) >= 93 && info.src.charCodeAt( pos ) <= 1699 ) ) state = 21;
		else if( info.src.charCodeAt( pos ) == 92 ) state = 27;
		else state = -1;
		match = 3;
		match_pos = pos;
		break;

	case 21:
		if( info.src.charCodeAt( pos ) == 39 ) state = 14;
		else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 38 ) || ( info.src.charCodeAt( pos ) >= 40 && info.src.charCodeAt( pos ) <= 91 ) || ( info.src.charCodeAt( pos ) >= 93 && info.src.charCodeAt( pos ) <= 1699 ) ) state = 21;
		else if( info.src.charCodeAt( pos ) == 92 ) state = 27;
		else state = -1;
		break;

	case 22:
		if( info.src.charCodeAt( pos ) == 42 ) state = 28;
		else if( info.src.charCodeAt( pos ) == 47 ) state = 29;
		else state = -1;
		break;

	case 23:
		if( info.src.charCodeAt( pos ) == 35 ) state = 2;
		else if( info.src.charCodeAt( pos ) == 46 ) state = 13;
		else if( info.src.charCodeAt( pos ) == 32 ) state = 23;
		else state = -1;
		break;

	case 24:
		if( info.src.charCodeAt( pos ) == 109 ) state = 30;
		else state = -1;
		break;

	case 25:
		if( info.src.charCodeAt( pos ) == 1607 ) state = 31;
		else state = -1;
		break;

	case 26:
		if( info.src.charCodeAt( pos ) == 34 ) state = 18;
		else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 33 ) || ( info.src.charCodeAt( pos ) >= 35 && info.src.charCodeAt( pos ) <= 91 ) || ( info.src.charCodeAt( pos ) >= 93 && info.src.charCodeAt( pos ) <= 1699 ) ) state = 19;
		else if( info.src.charCodeAt( pos ) == 92 ) state = 26;
		else state = -1;
		break;

	case 27:
		if( info.src.charCodeAt( pos ) == 39 ) state = 20;
		else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 38 ) || ( info.src.charCodeAt( pos ) >= 40 && info.src.charCodeAt( pos ) <= 91 ) || ( info.src.charCodeAt( pos ) >= 93 && info.src.charCodeAt( pos ) <= 1699 ) ) state = 21;
		else if( info.src.charCodeAt( pos ) == 92 ) state = 27;
		else state = -1;
		break;

	case 28:
		if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 41 ) || ( info.src.charCodeAt( pos ) >= 43 && info.src.charCodeAt( pos ) <= 46 ) || ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 1699 ) ) state = 28;
		else if( info.src.charCodeAt( pos ) == 42 ) state = 32;
		else state = -1;
		break;

	case 29:
		if( info.src.charCodeAt( pos ) == 10 ) state = 1;
		else if( ( info.src.charCodeAt( pos ) >= 0 && info.src.charCodeAt( pos ) <= 9 ) || ( info.src.charCodeAt( pos ) >= 11 && info.src.charCodeAt( pos ) <= 1699 ) ) state = 29;
		else state = -1;
		break;

	case 30:
		if( info.src.charCodeAt( pos ) == 112 ) state = 33;
		else state = -1;
		break;

	case 31:
		if( info.src.charCodeAt( pos ) == 1605 ) state = 15;
		else state = -1;
		break;

	case 32:
		if( info.src.charCodeAt( pos ) == 47 ) state = 1;
		else state = -1;
		break;

	case 33:
		if( info.src.charCodeAt( pos ) == 111 ) state = 34;
		else state = -1;
		break;

	case 34:
		if( info.src.charCodeAt( pos ) == 114 ) state = 35;
		else state = -1;
		break;

	case 35:
		if( info.src.charCodeAt( pos ) == 116 ) state = 36;
		else state = -1;
		break;

	case 36:
		if( info.src.charCodeAt( pos ) == 97 ) state = 37;
		else state = -1;
		break;

	case 37:
		if( info.src.charCodeAt( pos ) == 110 ) state = 38;
		else state = -1;
		break;

	case 38:
		if( info.src.charCodeAt( pos ) == 116 ) state = 15;
		else state = -1;
		break;

}


			pos++;

		}
		while( state > -1 );

	}
	while( 1 > -1 && match == 1 );

	if( match > -1 )
	{
		info.att = info.src.substr( start, match_pos - start );
		info.offset = match_pos;
		

	}
	else
	{
		info.att = new String();
		match = -1;
	}

	return match;
}


function __parse( src, err_off, err_la )
{
	var		sstack			= new Array();
	var		vstack			= new Array();
	var 	err_cnt			= 0;
	var		act;
	var		go;
	var		la;
	var		rval;
	var 	parseinfo		= new Function( "", "var offset; var src; var att;" );
	var		info			= new parseinfo();
	
/* Pop-Table */
var pop_tab = new Array(
	new Array( 0/* program' */, 1 ),
	new Array( 17/* program */, 1 ),
	new Array( 17/* program */, 0 ),
	new Array( 16/* blocks */, 2 ),
	new Array( 16/* blocks */, 1 ),
	new Array( 18/* block */, 4 ),
	new Array( 18/* block */, 3 ),
	new Array( 19/* selector_list */, 1 ),
	new Array( 21/* identifier_list */, 2 ),
	new Array( 21/* identifier_list */, 1 ),
	new Array( 22/* identifier_part */, 4 ),
	new Array( 22/* identifier_part */, 1 ),
	new Array( 22/* identifier_part */, 1 ),
	new Array( 22/* identifier_part */, 1 ),
	new Array( 22/* identifier_part */, 1 ),
	new Array( 23/* params_list */, 3 ),
	new Array( 23/* params_list */, 1 ),
	new Array( 26/* param */, 1 ),
	new Array( 26/* param */, 1 ),
	new Array( 26/* param */, 1 ),
	new Array( 24/* color */, 2 ),
	new Array( 25/* separator */, 1 ),
	new Array( 25/* separator */, 1 ),
	new Array( 25/* separator */, 1 ),
	new Array( 25/* separator */, 1 ),
	new Array( 25/* separator */, 1 ),
	new Array( 20/* properties_list */, 2 ),
	new Array( 20/* properties_list */, 1 ),
	new Array( 27/* property */, 5 ),
	new Array( 28/* important_sign */, 1 ),
	new Array( 28/* important_sign */, 0 )
);

/* Action-Table */
var act_tab = new Array(
	/* State 0 */ new Array( 2/* "identifier" */,7 , 14/* "*" */,10 , 7/* "id_sign" */,11 , 6/* "," */,12 , 9/* "class_sign" */,13 , 8/* ":" */,14 , 10/* ">" */,15 , 29/* "$" */,-2 ),
	/* State 1 */ new Array( 29/* "$" */,0 ),
	/* State 2 */ new Array( 2/* "identifier" */,7 , 14/* "*" */,10 , 7/* "id_sign" */,11 , 6/* "," */,12 , 9/* "class_sign" */,13 , 8/* ":" */,14 , 10/* ">" */,15 , 29/* "$" */,-1 ),
	/* State 3 */ new Array( 29/* "$" */,-4 , 2/* "identifier" */,-4 , 14/* "*" */,-4 , 7/* "id_sign" */,-4 , 6/* "," */,-4 , 9/* "class_sign" */,-4 , 8/* ":" */,-4 , 10/* ">" */,-4 ),
	/* State 4 */ new Array( 4/* "{" */,17 ),
	/* State 5 */ new Array( 2/* "identifier" */,7 , 14/* "*" */,10 , 7/* "id_sign" */,11 , 6/* "," */,12 , 9/* "class_sign" */,13 , 8/* ":" */,14 , 10/* ">" */,15 , 4/* "{" */,-7 ),
	/* State 6 */ new Array( 4/* "{" */,-9 , 2/* "identifier" */,-9 , 14/* "*" */,-9 , 7/* "id_sign" */,-9 , 6/* "," */,-9 , 9/* "class_sign" */,-9 , 8/* ":" */,-9 , 10/* ">" */,-9 , 15/* "important" */,-9 , 13/* "line_terminal" */,-9 ),
	/* State 7 */ new Array( 11/* "(" */,19 , 4/* "{" */,-11 , 2/* "identifier" */,-11 , 14/* "*" */,-11 , 7/* "id_sign" */,-11 , 6/* "," */,-11 , 9/* "class_sign" */,-11 , 8/* ":" */,-11 , 10/* ">" */,-11 , 15/* "important" */,-11 , 13/* "line_terminal" */,-11 ),
	/* State 8 */ new Array( 4/* "{" */,-12 , 2/* "identifier" */,-12 , 14/* "*" */,-12 , 7/* "id_sign" */,-12 , 6/* "," */,-12 , 9/* "class_sign" */,-12 , 8/* ":" */,-12 , 10/* ">" */,-12 , 15/* "important" */,-12 , 13/* "line_terminal" */,-12 ),
	/* State 9 */ new Array( 4/* "{" */,-13 , 2/* "identifier" */,-13 , 14/* "*" */,-13 , 7/* "id_sign" */,-13 , 6/* "," */,-13 , 9/* "class_sign" */,-13 , 8/* ":" */,-13 , 10/* ">" */,-13 , 15/* "important" */,-13 , 13/* "line_terminal" */,-13 ),
	/* State 10 */ new Array( 4/* "{" */,-14 , 2/* "identifier" */,-14 , 14/* "*" */,-14 , 7/* "id_sign" */,-14 , 6/* "," */,-14 , 9/* "class_sign" */,-14 , 8/* ":" */,-14 , 10/* ">" */,-14 , 15/* "important" */,-14 , 13/* "line_terminal" */,-14 ),
	/* State 11 */ new Array( 2/* "identifier" */,20 , 4/* "{" */,-22 , 14/* "*" */,-22 , 7/* "id_sign" */,-22 , 6/* "," */,-22 , 9/* "class_sign" */,-22 , 8/* ":" */,-22 , 10/* ">" */,-22 , 15/* "important" */,-22 , 13/* "line_terminal" */,-22 ),
	/* State 12 */ new Array( 4/* "{" */,-21 , 2/* "identifier" */,-21 , 14/* "*" */,-21 , 7/* "id_sign" */,-21 , 6/* "," */,-21 , 9/* "class_sign" */,-21 , 8/* ":" */,-21 , 10/* ">" */,-21 , 15/* "important" */,-21 , 13/* "line_terminal" */,-21 ),
	/* State 13 */ new Array( 4/* "{" */,-23 , 2/* "identifier" */,-23 , 14/* "*" */,-23 , 7/* "id_sign" */,-23 , 6/* "," */,-23 , 9/* "class_sign" */,-23 , 8/* ":" */,-23 , 10/* ">" */,-23 , 15/* "important" */,-23 , 13/* "line_terminal" */,-23 ),
	/* State 14 */ new Array( 4/* "{" */,-24 , 2/* "identifier" */,-24 , 14/* "*" */,-24 , 7/* "id_sign" */,-24 , 6/* "," */,-24 , 9/* "class_sign" */,-24 , 8/* ":" */,-24 , 10/* ">" */,-24 , 15/* "important" */,-24 , 13/* "line_terminal" */,-24 ),
	/* State 15 */ new Array( 4/* "{" */,-25 , 2/* "identifier" */,-25 , 14/* "*" */,-25 , 7/* "id_sign" */,-25 , 6/* "," */,-25 , 9/* "class_sign" */,-25 , 8/* ":" */,-25 , 10/* ">" */,-25 , 15/* "important" */,-25 , 13/* "line_terminal" */,-25 ),
	/* State 16 */ new Array( 29/* "$" */,-3 , 2/* "identifier" */,-3 , 14/* "*" */,-3 , 7/* "id_sign" */,-3 , 6/* "," */,-3 , 9/* "class_sign" */,-3 , 8/* ":" */,-3 , 10/* ">" */,-3 ),
	/* State 17 */ new Array( 5/* "}" */,22 , 2/* "identifier" */,24 ),
	/* State 18 */ new Array( 4/* "{" */,-8 , 2/* "identifier" */,-8 , 14/* "*" */,-8 , 7/* "id_sign" */,-8 , 6/* "," */,-8 , 9/* "class_sign" */,-8 , 8/* ":" */,-8 , 10/* ">" */,-8 , 15/* "important" */,-8 , 13/* "line_terminal" */,-8 ),
	/* State 19 */ new Array( 2/* "identifier" */,28 , 3/* "string" */,29 , 7/* "id_sign" */,30 ),
	/* State 20 */ new Array( 4/* "{" */,-20 , 2/* "identifier" */,-20 , 14/* "*" */,-20 , 7/* "id_sign" */,-20 , 6/* "," */,-20 , 9/* "class_sign" */,-20 , 8/* ":" */,-20 , 10/* ">" */,-20 , 12/* ")" */,-20 , 15/* "important" */,-20 , 13/* "line_terminal" */,-20 ),
	/* State 21 */ new Array( 5/* "}" */,32 , 2/* "identifier" */,24 ),
	/* State 22 */ new Array( 29/* "$" */,-6 , 2/* "identifier" */,-6 , 14/* "*" */,-6 , 7/* "id_sign" */,-6 , 6/* "," */,-6 , 9/* "class_sign" */,-6 , 8/* ":" */,-6 , 10/* ">" */,-6 ),
	/* State 23 */ new Array( 5/* "}" */,-27 , 2/* "identifier" */,-27 ),
	/* State 24 */ new Array( 8/* ":" */,33 ),
	/* State 25 */ new Array( 6/* "," */,34 , 12/* ")" */,35 ),
	/* State 26 */ new Array( 12/* ")" */,-16 , 6/* "," */,-16 ),
	/* State 27 */ new Array( 12/* ")" */,-17 , 6/* "," */,-17 ),
	/* State 28 */ new Array( 12/* ")" */,-18 , 6/* "," */,-18 ),
	/* State 29 */ new Array( 12/* ")" */,-19 , 6/* "," */,-19 ),
	/* State 30 */ new Array( 2/* "identifier" */,20 ),
	/* State 31 */ new Array( 5/* "}" */,-26 , 2/* "identifier" */,-26 ),
	/* State 32 */ new Array( 29/* "$" */,-5 , 2/* "identifier" */,-5 , 14/* "*" */,-5 , 7/* "id_sign" */,-5 , 6/* "," */,-5 , 9/* "class_sign" */,-5 , 8/* ":" */,-5 , 10/* ">" */,-5 ),
	/* State 33 */ new Array( 2/* "identifier" */,7 , 14/* "*" */,10 , 7/* "id_sign" */,11 , 6/* "," */,12 , 9/* "class_sign" */,13 , 8/* ":" */,14 , 10/* ">" */,15 ),
	/* State 34 */ new Array( 2/* "identifier" */,28 , 3/* "string" */,29 , 7/* "id_sign" */,30 ),
	/* State 35 */ new Array( 4/* "{" */,-10 , 2/* "identifier" */,-10 , 14/* "*" */,-10 , 7/* "id_sign" */,-10 , 6/* "," */,-10 , 9/* "class_sign" */,-10 , 8/* ":" */,-10 , 10/* ">" */,-10 , 15/* "important" */,-10 , 13/* "line_terminal" */,-10 ),
	/* State 36 */ new Array( 15/* "important" */,39 , 2/* "identifier" */,7 , 14/* "*" */,10 , 7/* "id_sign" */,11 , 6/* "," */,12 , 9/* "class_sign" */,13 , 8/* ":" */,14 , 10/* ">" */,15 , 13/* "line_terminal" */,-30 ),
	/* State 37 */ new Array( 12/* ")" */,-15 , 6/* "," */,-15 ),
	/* State 38 */ new Array( 13/* "line_terminal" */,40 ),
	/* State 39 */ new Array( 13/* "line_terminal" */,-29 ),
	/* State 40 */ new Array( 5/* "}" */,-28 , 2/* "identifier" */,-28 )
);

/* Goto-Table */
var goto_tab = new Array(
	/* State 0 */ new Array( 17/* program */,1 , 16/* blocks */,2 , 18/* block */,3 , 19/* selector_list */,4 , 21/* identifier_list */,5 , 22/* identifier_part */,6 , 24/* color */,8 , 25/* separator */,9 ),
	/* State 1 */ new Array(  ),
	/* State 2 */ new Array( 18/* block */,16 , 19/* selector_list */,4 , 21/* identifier_list */,5 , 22/* identifier_part */,6 , 24/* color */,8 , 25/* separator */,9 ),
	/* State 3 */ new Array(  ),
	/* State 4 */ new Array(  ),
	/* State 5 */ new Array( 22/* identifier_part */,18 , 24/* color */,8 , 25/* separator */,9 ),
	/* State 6 */ new Array(  ),
	/* State 7 */ new Array(  ),
	/* State 8 */ new Array(  ),
	/* State 9 */ new Array(  ),
	/* State 10 */ new Array(  ),
	/* State 11 */ new Array(  ),
	/* State 12 */ new Array(  ),
	/* State 13 */ new Array(  ),
	/* State 14 */ new Array(  ),
	/* State 15 */ new Array(  ),
	/* State 16 */ new Array(  ),
	/* State 17 */ new Array( 20/* properties_list */,21 , 27/* property */,23 ),
	/* State 18 */ new Array(  ),
	/* State 19 */ new Array( 23/* params_list */,25 , 26/* param */,26 , 24/* color */,27 ),
	/* State 20 */ new Array(  ),
	/* State 21 */ new Array( 27/* property */,31 ),
	/* State 22 */ new Array(  ),
	/* State 23 */ new Array(  ),
	/* State 24 */ new Array(  ),
	/* State 25 */ new Array(  ),
	/* State 26 */ new Array(  ),
	/* State 27 */ new Array(  ),
	/* State 28 */ new Array(  ),
	/* State 29 */ new Array(  ),
	/* State 30 */ new Array(  ),
	/* State 31 */ new Array(  ),
	/* State 32 */ new Array(  ),
	/* State 33 */ new Array( 21/* identifier_list */,36 , 22/* identifier_part */,6 , 24/* color */,8 , 25/* separator */,9 ),
	/* State 34 */ new Array( 26/* param */,37 , 24/* color */,27 ),
	/* State 35 */ new Array(  ),
	/* State 36 */ new Array( 22/* identifier_part */,18 , 28/* important_sign */,38 , 24/* color */,8 , 25/* separator */,9 ),
	/* State 37 */ new Array(  ),
	/* State 38 */ new Array(  ),
	/* State 39 */ new Array(  ),
	/* State 40 */ new Array(  )
);



/* Symbol labels */
var labels = new Array(
	"program'" /* Non-terminal symbol */,
	"WHITESPACE" /* Terminal symbol */,
	"identifier" /* Terminal symbol */,
	"string" /* Terminal symbol */,
	"{" /* Terminal symbol */,
	"}" /* Terminal symbol */,
	"," /* Terminal symbol */,
	"id_sign" /* Terminal symbol */,
	":" /* Terminal symbol */,
	"class_sign" /* Terminal symbol */,
	">" /* Terminal symbol */,
	"(" /* Terminal symbol */,
	")" /* Terminal symbol */,
	"line_terminal" /* Terminal symbol */,
	"*" /* Terminal symbol */,
	"important" /* Terminal symbol */,
	"blocks" /* Non-terminal symbol */,
	"program" /* Non-terminal symbol */,
	"block" /* Non-terminal symbol */,
	"selector_list" /* Non-terminal symbol */,
	"properties_list" /* Non-terminal symbol */,
	"identifier_list" /* Non-terminal symbol */,
	"identifier_part" /* Non-terminal symbol */,
	"params_list" /* Non-terminal symbol */,
	"color" /* Non-terminal symbol */,
	"separator" /* Non-terminal symbol */,
	"param" /* Non-terminal symbol */,
	"property" /* Non-terminal symbol */,
	"important_sign" /* Non-terminal symbol */,
	"$" /* Terminal symbol */
);


	
	info.offset = 0;
	info.src = src;
	info.att = new String();
	
	if( !err_off )
		err_off	= new Array();
	if( !err_la )
	err_la = new Array();
	
	sstack.push( 0 );
	vstack.push( 0 );
	
	la = __lex( info );

	while( true )
	{
		act = 42;
		for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
		{
			if( act_tab[sstack[sstack.length-1]][i] == la )
			{
				act = act_tab[sstack[sstack.length-1]][i+1];
				break;
			}
		}

		if( _dbg_withtrace && sstack.length > 0 )
		{
			__dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
							"\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
							"\tAction: " + act + "\n" + 
							"\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
									"..." : "" ) + "\"\n" +
							"\tStack: " + sstack.join() + "\n" +
							"\tValue stack: " + vstack.join() + "\n" );
		}
		
			
		//Panic-mode: Try recovery when parse-error occurs!
		if( act == 42 )
		{
			if( _dbg_withtrace )
				__dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
			
			err_cnt++;
			err_off.push( info.offset - info.att.length );			
			err_la.push( new Array() );
			for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
				err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
			
			//Remember the original stack!
			var rsstack = new Array();
			var rvstack = new Array();
			for( var i = 0; i < sstack.length; i++ )
			{
				rsstack[i] = sstack[i];
				rvstack[i] = vstack[i];
			}
			
			while( act == 42 && la != 29 )
			{
				if( _dbg_withtrace )
					__dbg_print( "\tError recovery\n" +
									"Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
									"Action: " + act + "\n\n" );
				if( la == -1 )
					info.offset++;
					
				while( act == 42 && sstack.length > 0 )
				{
					sstack.pop();
					vstack.pop();
					
					if( sstack.length == 0 )
						break;
						
					act = 42;
					for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
					{
						if( act_tab[sstack[sstack.length-1]][i] == la )
						{
							act = act_tab[sstack[sstack.length-1]][i+1];
							break;
						}
					}
				}
				
				if( act != 42 )
					break;
				
				for( var i = 0; i < rsstack.length; i++ )
				{
					sstack.push( rsstack[i] );
					vstack.push( rvstack[i] );
				}
				
				la = __lex( info );
			}
			
			if( act == 42 )
			{
				if( _dbg_withtrace )
					__dbg_print( "\tError recovery failed, terminating parse process..." );
				break;
			}


			if( _dbg_withtrace )
				__dbg_print( "\tError recovery succeeded, continuing" );
		}
		
		/*
		if( act == 42 )
			break;
		*/
		
		
		//Shift
		if( act > 0 )
		{			
			if( _dbg_withtrace )
				__dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
		
			sstack.push( act );
			vstack.push( info.att );
			
			la = __lex( info );
			
			if( _dbg_withtrace )
				__dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
		}
		//Reduce
		else
		{		
			act *= -1;
			
			if( _dbg_withtrace )
				__dbg_print( "Reducing by producution: " + act );
			
			rval = void(0);
			
			if( _dbg_withtrace )
				__dbg_print( "\tPerforming semantic action..." );
			
switch( act )
{
	case 0:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 1:
	{
		 result = new sema.tree.file(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 2:
	{
		rval = vstack[ vstack.length - 0 ];
	}
	break;
	case 3:
	{
		 rval = vstack[ vstack.length - 2 ];vstack[ vstack.length - 2 ].push(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 4:
	{
		 rval = [vstack[ vstack.length - 1 ]]; 
	}
	break;
	case 5:
	{
		 rval = new sema.tree.block(vstack[ vstack.length - 4 ],vstack[ vstack.length - 2 ]); 
	}
	break;
	case 6:
	{
		 rval = new sema.tree.block(vstack[ vstack.length - 3 ]); 
	}
	break;
	case 7:
	{
		 rval = vstack[ vstack.length - 1 ].map(function(item){
																	return new sema.tree.selector(item);
																}); 
	}
	break;
	case 8:
	{
		 rval = vstack[ vstack.length - 2 ];vstack[ vstack.length - 2 ].push(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 9:
	{
		 rval = [vstack[ vstack.length - 1 ]]; 
	}
	break;
	case 10:
	{
		 rval = new sema.tree.func(vstack[ vstack.length - 4 ],vstack[ vstack.length - 2 ]); 
	}
	break;
	case 11:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 12:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 13:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 14:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 15:
	{
		 rval = vstack[ vstack.length - 3 ];vstack[ vstack.length - 3 ].push(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 16:
	{
		 rval = [vstack[ vstack.length - 1 ]]; 
	}
	break;
	case 17:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 18:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 19:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 20:
	{
		 rval = '#'+vstack[ vstack.length - 1 ] 
	}
	break;
	case 21:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 22:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 23:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 24:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 25:
	{
		rval = vstack[ vstack.length - 1 ];
	}
	break;
	case 26:
	{
		 rval = vstack[ vstack.length - 2 ];vstack[ vstack.length - 2 ].push(vstack[ vstack.length - 1 ]); 
	}
	break;
	case 27:
	{
		 rval = [vstack[ vstack.length - 1 ]] 
	}
	break;
	case 28:
	{
		 rval = new sema.tree.property(vstack[ vstack.length - 5 ],vstack[ vstack.length - 3 ],vstack[ vstack.length - 2 ]); 
	}
	break;
	case 29:
	{
		 rval = true; 
	}
	break;
	case 30:
	{
		 rval = false; 
	}
	break;
}



			if( _dbg_withtrace )
				__dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
				
			for( var i = 0; i < pop_tab[act][1]; i++ )
			{
				sstack.pop();
				vstack.pop();
			}
									
			go = -1;
			for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
			{
				if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
				{
					go = goto_tab[sstack[sstack.length-1]][i+1];
					break;
				}
			}
			
			if( act == 0 )
				break;
				
			if( _dbg_withtrace )
				__dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
				
			sstack.push( go );
			vstack.push( rval );			
		}
		
		if( _dbg_withtrace )
		{		
			alert( _dbg_string );
			_dbg_string = new String();
		}
	}

	if( _dbg_withtrace )
	{
		__dbg_print( "\nParse complete." );
		alert( _dbg_string );
	}
	
	return err_cnt;
}



var error_offsets = new Array();
var error_lookaheads = new Array();
var error_count = 0;

/* Switching one of these variables on will enable debug facilities
	of the various parser drivers */
//#PREFIX##_dbg_withtrace = true;
//_dbg_withparsetree = true;
//_dbg_withstepbystep = true;

var str = arguments[0];

if( ( error_count = __parse( str,
	error_offsets, error_lookaheads ) ) > 0 )
{
	for( var i = 0; i < error_count; i++ )
		result = "Parse error near \"" 
				+ str.substr( error_offsets[i] ) +
					"\", expecting \"" +
						error_lookaheads[i].join() +
							"\"";
}
	return {
		result: result,
		error_offsets: error_offsets,
		error_lookaheads: error_lookaheads,
		error_count: error_count,
	};
}



