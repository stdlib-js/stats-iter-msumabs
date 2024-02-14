// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).itermsumabs=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function i(e){return"number"==typeof e}function t(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function n(e,r,i){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=i?e+t(a):t(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(e){var r,t,s;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===e.specifier||10!==r)&&(s=4294967295+s+1),s<0?(t=(-s).toString(r),e.precision&&(t=n(t,e.precision,e.padRight)),t="-"+t):(t=s.toString(r),s||e.precision?e.precision&&(t=n(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===o.call(e.specifier)?o.call(t):a.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(e){return"string"==typeof e}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!i(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":p(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,b,"e"),t=f.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),e.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===u.call(e.specifier)?u.call(t):l.call(t)}function E(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function x(e,r,i){var t=r-e.length;return t<0?e:e=i?e+E(t):E(t)+e}var k=String.fromCharCode,S=isNaN,V=Array.isArray;function F(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,i,t,a,o,p,l,u,f;if(!V(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(p="",l=1,u=0;u<e.length;u++)if(c(t=e[u]))p+=t;else{if(r=void 0!==t.precision,!(t=F(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(a=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,S(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,S(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!S(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=S(o)?String(t.arg):k(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=n(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=x(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function I(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,i,t,n;for(i=[],n=0,t=$.exec(e);t;)(r=e.slice(n,$.lastIndex-t[0].length)).length&&i.push(r),i.push(I(t)),n=$.lastIndex,t=$.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function C(e){return"string"==typeof e}function j(e){var r,i;if(!C(e))throw new TypeError(j("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return T.apply(null,r)}var R,_=Object.prototype,Z=_.toString,N=_.__defineGetter__,O=_.__defineSetter__,W=_.__lookupGetter__,L=_.__lookupSetter__;R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===Z.call(e))throw new TypeError(j("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===Z.call(i))throw new TypeError(j("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(W.call(e,r)||L.call(e,r)?(t=e.__proto__,e.__proto__=_,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&N&&N.call(e,r,i.get),o&&O&&O.call(e,r,i.set),e};var P=R;function G(e,r,i){P(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}var U=/./;function X(e){return"boolean"==typeof e}function M(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var B=M();function z(){return B&&"symbol"==typeof Symbol.toStringTag}var Y=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;function D(e,r){return null!=e&&q.call(e,r)}var H="function"==typeof Symbol?Symbol:void 0,J="function"==typeof H?H.toStringTag:"";var K=z()?function(e){var r,i,t;if(null==e)return Y.call(e);i=e[J],r=D(e,J);try{e[J]=void 0}catch(r){return Y.call(e)}return t=Y.call(e),r?e[J]=i:delete e[J],t}:function(e){return Y.call(e)},Q=Boolean,ee=Boolean.prototype.toString;var re=z();function ie(e){return"object"==typeof e&&(e instanceof Q||(re?function(e){try{return ee.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===K(e)))}function te(e){return X(e)||ie(e)}function ne(e){return"number"==typeof e}function ae(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function oe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+ae(n):ae(n)+e,t&&(e="-"+e)),e}G(te,"isPrimitive",X),G(te,"isObject",ie);var se=String.prototype.toLowerCase,ce=String.prototype.toUpperCase;function pe(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ne(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=oe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=oe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===ce.call(e.specifier)?ce.call(i):se.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function le(e){return"string"==typeof e}var ue=Math.abs,fe=String.prototype.toLowerCase,ge=String.prototype.toUpperCase,de=String.prototype.replace,he=/e\+(\d)$/,we=/e-(\d)$/,ve=/^(\d+)$/,be=/^(\d+)e/,ye=/\.0$/,me=/\.0*e/,Ee=/(\..*[^0])0*e/;function xe(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ne(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":ue(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=de.call(i,Ee,"$1e"),i=de.call(i,me,"e"),i=de.call(i,ye,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=de.call(i,he,"e+0$1"),i=de.call(i,we,"e-0$1"),e.alternate&&(i=de.call(i,ve,"$1."),i=de.call(i,be,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ge.call(e.specifier)?ge.call(i):fe.call(i)}function ke(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Se(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ke(t):ke(t)+e}var Ve=String.fromCharCode,Fe=isNaN,Te=Array.isArray;function $e(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Ie(e){var r,i,t,n,a,o,s,c,p;if(!Te(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(le(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=$e(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Fe(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Fe(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=pe(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Fe(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Fe(a)?String(t.arg):Ve(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=xe(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=oe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Se(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Ae=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ce(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function je(e){var r,i,t,n;for(i=[],n=0,t=Ae.exec(e);t;)(r=e.slice(n,Ae.lastIndex-t[0].length)).length&&i.push(r),i.push(Ce(t)),n=Ae.lastIndex,t=Ae.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Re(e){return"string"==typeof e}function _e(e){var r,i;if(!Re(e))throw new TypeError(_e("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[je(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Ie.apply(null,r)}function Ze(){return new Function("return this;")()}var Ne="object"==typeof self?self:null,Oe="object"==typeof window?window:null,We="object"==typeof global?global:null,Le="object"==typeof globalThis?globalThis:null;var Pe=function(e){if(arguments.length){if(!X(e))throw new TypeError(_e("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ze()}if(Le)return Le;if(Ne)return Ne;if(Oe)return Oe;if(We)return We;throw new Error("unexpected error. Unable to resolve global object.")}(),Ge=Pe.document&&Pe.document.childNodes,Ue=Int8Array;var Xe=M();var Me=Object.prototype.toString;var Be="function"==typeof Symbol?Symbol:void 0,ze="function"==typeof Be?Be.toStringTag:"";var Ye=Xe&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,t;if(null==e)return Me.call(e);i=e[ze],r=D(e,ze);try{e[ze]=void 0}catch(r){return Me.call(e)}return t=Me.call(e),r?e[ze]=i:delete e[ze],t}:function(e){return Me.call(e)};function qe(){return/^\s*function\s*([^(]*)/i}var De=/^\s*function\s*([^(]*)/i;G(qe,"REGEXP",De);var He=Array.isArray?Array.isArray:function(e){return"[object Array]"===Ye(e)};function Je(e){return"number"==typeof e}function Ke(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Qe(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Ke(n):Ke(n)+e,t&&(e="-"+e)),e}var er=String.prototype.toLowerCase,rr=String.prototype.toUpperCase;function ir(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Je(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Qe(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Qe(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===rr.call(e.specifier)?rr.call(i):er.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function tr(e){return"string"==typeof e}var nr=Math.abs,ar=String.prototype.toLowerCase,or=String.prototype.toUpperCase,sr=String.prototype.replace,cr=/e\+(\d)$/,pr=/e-(\d)$/,lr=/^(\d+)$/,ur=/^(\d+)e/,fr=/\.0$/,gr=/\.0*e/,dr=/(\..*[^0])0*e/;function hr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Je(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":nr(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=sr.call(i,dr,"$1e"),i=sr.call(i,gr,"e"),i=sr.call(i,fr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=sr.call(i,cr,"e+0$1"),i=sr.call(i,pr,"e-0$1"),e.alternate&&(i=sr.call(i,lr,"$1."),i=sr.call(i,ur,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===or.call(e.specifier)?or.call(i):ar.call(i)}function wr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function vr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+wr(t):wr(t)+e}var br=String.fromCharCode,yr=isNaN,mr=Array.isArray;function Er(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function xr(e){var r,i,t,n,a,o,s,c,p;if(!mr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(tr(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Er(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,yr(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,yr(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=ir(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!yr(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=yr(a)?String(t.arg):br(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=hr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Qe(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=vr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var kr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Sr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Vr(e){var r,i,t,n;for(i=[],n=0,t=kr.exec(e);t;)(r=e.slice(n,kr.lastIndex-t[0].length)).length&&i.push(r),i.push(Sr(t)),n=kr.lastIndex,t=kr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Fr(e){return"string"==typeof e}function Tr(e){var r,i;if(!Fr(e))throw new TypeError(Tr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Vr(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return xr.apply(null,r)}function $r(e){return null!==e&&"object"==typeof e}function Ir(e){var r,i,t,n;if(("Object"===(i=Ye(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=De.exec(t.toString()))return r[1]}return $r(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}G($r,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(Tr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!He(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}($r));var Ar="function"==typeof U||"object"==typeof Ue||"function"==typeof Ge?function(e){return Ir(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?Ir(e).toLowerCase():r};function Cr(e){return"function"===Ar(e)}function jr(e){return"number"==typeof e}var Rr=M();function _r(){return Rr&&"symbol"==typeof Symbol.toStringTag}var Zr=Object.prototype.toString;var Nr="function"==typeof Symbol?Symbol:void 0,Or="function"==typeof Nr?Nr.toStringTag:"";var Wr=_r()?function(e){var r,i,t;if(null==e)return Zr.call(e);i=e[Or],r=D(e,Or);try{e[Or]=void 0}catch(r){return Zr.call(e)}return t=Zr.call(e),r?e[Or]=i:delete e[Or],t}:function(e){return Zr.call(e)},Lr=Number,Pr=Lr.prototype.toString;var Gr=_r();function Ur(e){return"object"==typeof e&&(e instanceof Lr||(Gr?function(e){try{return Pr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===Wr(e)))}function Xr(e){return jr(e)||Ur(e)}G(Xr,"isPrimitive",jr),G(Xr,"isObject",Ur);var Mr=Number.POSITIVE_INFINITY,Br=Lr.NEGATIVE_INFINITY,zr=Math.floor;function Yr(e){return e<Mr&&e>Br&&zr(r=e)===r;var r}function qr(e){return jr(e)&&Yr(e)}function Dr(e){return Ur(e)&&Yr(e.valueOf())}function Hr(e){return qr(e)||Dr(e)}function Jr(e){return qr(e)&&e>0}function Kr(e){return Dr(e)&&e.valueOf()>0}function Qr(e){return Jr(e)||Kr(e)}G(Hr,"isPrimitive",qr),G(Hr,"isObject",Dr),G(Qr,"isPrimitive",Jr),G(Qr,"isObject",Kr);var ei="function"==typeof Symbol?Symbol:void 0;var ri="function"==typeof ei&&"symbol"==typeof ei("foo")&&D(ei,"iterator")&&"symbol"==typeof ei.iterator?Symbol.iterator:null;function ii(e){return Math.abs(e)}function ti(e){return e!=e}var ni=M();var ai=Object.prototype.toString;var oi="function"==typeof Symbol?Symbol:void 0,si="function"==typeof oi?oi.toStringTag:"";var ci=ni&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,t;if(null==e)return ai.call(e);i=e[si],r=D(e,si);try{e[si]=void 0}catch(r){return ai.call(e)}return t=ai.call(e),r?e[si]=i:delete e[si],t}:function(e){return ai.call(e)},pi="function"==typeof Float64Array;var li="function"==typeof Float64Array?Float64Array:null;var ui="function"==typeof Float64Array?Float64Array:void 0;var fi=function(){var e,r,i;if("function"!=typeof li)return!1;try{r=new li([1,3.14,-3.14,NaN]),i=r,e=(pi&&i instanceof Float64Array||"[object Float64Array]"===ci(i))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ui:function(){throw new Error("not implemented")};function gi(e){return"number"==typeof e}function di(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function hi(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+di(n):di(n)+e,t&&(e="-"+e)),e}var wi=String.prototype.toLowerCase,vi=String.prototype.toUpperCase;function bi(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!gi(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=hi(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=hi(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===vi.call(e.specifier)?vi.call(i):wi.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function yi(e){return"string"==typeof e}var mi=Math.abs,Ei=String.prototype.toLowerCase,xi=String.prototype.toUpperCase,ki=String.prototype.replace,Si=/e\+(\d)$/,Vi=/e-(\d)$/,Fi=/^(\d+)$/,Ti=/^(\d+)e/,$i=/\.0$/,Ii=/\.0*e/,Ai=/(\..*[^0])0*e/;function Ci(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!gi(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":mi(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=ki.call(i,Ai,"$1e"),i=ki.call(i,Ii,"e"),i=ki.call(i,$i,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=ki.call(i,Si,"e+0$1"),i=ki.call(i,Vi,"e-0$1"),e.alternate&&(i=ki.call(i,Fi,"$1."),i=ki.call(i,Ti,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===xi.call(e.specifier)?xi.call(i):Ei.call(i)}function ji(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Ri(e,r,i){var t=r-e.length;return t<0?e:e=i?e+ji(t):ji(t)+e}var _i=String.fromCharCode,Zi=isNaN,Ni=Array.isArray;function Oi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Wi(e){var r,i,t,n,a,o,s,c,p;if(!Ni(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(yi(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Oi(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Zi(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Zi(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=bi(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Zi(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Zi(a)?String(t.arg):_i(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Ci(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=hi(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ri(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Li=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Pi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Gi(e){var r,i,t,n;for(i=[],n=0,t=Li.exec(e);t;)(r=e.slice(n,Li.lastIndex-t[0].length)).length&&i.push(r),i.push(Pi(t)),n=Li.lastIndex,t=Li.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Ui(e){return"string"==typeof e}function Xi(e){var r,i;if(!Ui(e))throw new TypeError(Xi("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Gi(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return Wi.apply(null,r)}function Mi(e){var r,i,t,n;if(!Jr(e))throw new TypeError(Xi("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=new fi(e),i=0,n=-1,t=0,function(a){var o;if(0===arguments.length)return 0===t?null:i;if(n=(n+1)%e,ti(a))t=e,i=NaN;else if(t<e)t+=1,i+=a;else if(ti(r[n])){for(t=1,i=a,o=0;o<e;o++)if(o!==n){if(ti(r[o])){t=e,i=NaN;break}t+=1,i+=r[o]}}else!1===ti(i)&&(i+=a-r[n]);return r[n]=a,i}}function Bi(e){return"number"==typeof e}function zi(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Yi(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+zi(n):zi(n)+e,t&&(e="-"+e)),e}var qi=String.prototype.toLowerCase,Di=String.prototype.toUpperCase;function Hi(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Bi(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Yi(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Yi(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Di.call(e.specifier)?Di.call(i):qi.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function Ji(e){return"string"==typeof e}var Ki=Math.abs,Qi=String.prototype.toLowerCase,et=String.prototype.toUpperCase,rt=String.prototype.replace,it=/e\+(\d)$/,tt=/e-(\d)$/,nt=/^(\d+)$/,at=/^(\d+)e/,ot=/\.0$/,st=/\.0*e/,ct=/(\..*[^0])0*e/;function pt(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Bi(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Ki(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=rt.call(i,ct,"$1e"),i=rt.call(i,st,"e"),i=rt.call(i,ot,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=rt.call(i,it,"e+0$1"),i=rt.call(i,tt,"e-0$1"),e.alternate&&(i=rt.call(i,nt,"$1."),i=rt.call(i,at,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===et.call(e.specifier)?et.call(i):Qi.call(i)}function lt(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function ut(e,r,i){var t=r-e.length;return t<0?e:e=i?e+lt(t):lt(t)+e}var ft=String.fromCharCode,gt=isNaN,dt=Array.isArray;function ht(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function wt(e){var r,i,t,n,a,o,s,c,p;if(!dt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(Ji(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=ht(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,gt(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,gt(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=Hi(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!gt(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=gt(a)?String(t.arg):ft(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=pt(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Yi(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=ut(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var vt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function bt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function yt(e){var r,i,t,n;for(i=[],n=0,t=vt.exec(e);t;)(r=e.slice(n,vt.lastIndex-t[0].length)).length&&i.push(r),i.push(bt(t)),n=vt.lastIndex,t=vt.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function mt(e){return"string"==typeof e}function Et(e){var r,i;if(!mt(e))throw new TypeError(Et("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[yt(e)],i=1;i<arguments.length;i++)r.push(arguments[i]);return wt.apply(null,r)}function xt(e){var r;if(!Jr(e))throw new TypeError(Et("invalid argument. Must provide a positive integer. Value: `%s`.",e));return r=Mi(e),function(e){if(0===arguments.length)return r();return r(ii(e))}}function kt(e){return"number"==typeof e}function St(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Vt(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+St(n):St(n)+e,t&&(e="-"+e)),e}var Ft=String.prototype.toLowerCase,Tt=String.prototype.toUpperCase;function $t(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!kt(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Vt(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Vt(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===Tt.call(e.specifier)?Tt.call(i):Ft.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function It(e){return"string"==typeof e}var At=Math.abs,Ct=String.prototype.toLowerCase,jt=String.prototype.toUpperCase,Rt=String.prototype.replace,_t=/e\+(\d)$/,Zt=/e-(\d)$/,Nt=/^(\d+)$/,Ot=/^(\d+)e/,Wt=/\.0$/,Lt=/\.0*e/,Pt=/(\..*[^0])0*e/;function Gt(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!kt(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":At(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Rt.call(i,Pt,"$1e"),i=Rt.call(i,Lt,"e"),i=Rt.call(i,Wt,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Rt.call(i,_t,"e+0$1"),i=Rt.call(i,Zt,"e-0$1"),e.alternate&&(i=Rt.call(i,Nt,"$1."),i=Rt.call(i,Ot,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===jt.call(e.specifier)?jt.call(i):Ct.call(i)}function Ut(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function Xt(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ut(t):Ut(t)+e}var Mt=String.fromCharCode,Bt=isNaN,zt=Array.isArray;function Yt(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function qt(e){var r,i,t,n,a,o,s,c,p;if(!zt(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(It(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=Yt(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Bt(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Bt(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=$t(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Bt(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Bt(a)?String(t.arg):Mt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=Gt(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Vt(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Xt(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Dt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ht(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Jt(e){var r,i,t,n;for(i=[],n=0,t=Dt.exec(e);t;)(r=e.slice(n,Dt.lastIndex-t[0].length)).length&&i.push(r),i.push(Ht(t)),n=Dt.lastIndex,t=Dt.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Kt(e){return"string"==typeof e}function Qt(e){var r,i,t;if(!Kt(e))throw new TypeError(Qt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Jt(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return qt.apply(null,i)}return function e(r,i){var t,n,a,o,s;if(s=typeof(o=r),null===o||"object"!==s&&"function"!==s||!Cr(o.next))throw new TypeError(Qt("invalid argument. First argument must be an iterator. Value: `%s`.",r));if(!Jr(i))throw new TypeError(Qt("invalid argument. Second argument must be a positive integer. Value: `%s`.",i));return a=xt(i),G(t={},"next",(function(){var e;if(n)return{done:!0};if((e=r.next()).done)return n=!0,{done:!0};e="number"==typeof e.value?a(e.value):a(NaN);return{value:e,done:!1}})),G(t,"return",(function(e){if(n=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ri&&Cr(r[ri])&&G(t,ri,(function(){return e(r[ri](),i)})),t}}));
//# sourceMappingURL=index.js.map
