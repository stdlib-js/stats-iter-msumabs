// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,v;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,v="set"in t,s&&(l||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),v&&u&&u.call(r,e,t.set),r},l=n,v=s,p=t()?l:v;var g=function(r,e,t){p(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g,d=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",T=_,S=O,x=w;var V=j,A=function(r){var e,t,n;if(null==r)return x.call(r);t=r[S],e=T(r,S);try{r[S]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[S]=t:delete r[S],n},k=y()?A:V,F=Boolean.prototype.toString;var I=k,N=function(r){try{return F.call(r),!0}catch(r){return!1}},M=y();var R=function(r){return"object"==typeof r&&(r instanceof Boolean||(M?N(r):"[object Boolean]"===I(r)))},$=h,C=R;var B=m,G=function(r){return $(r)||C(r)},L=R;B(G,"isPrimitive",h),B(G,"isObject",L);var Z="object"==typeof self?self:null,W="object"==typeof window?window:null,X=G.isPrimitive,z=function(){return new Function("return this;")()},U=Z,Y=W,D=r(Object.freeze({__proto__:null}));var q=function(r){if(arguments.length){if(!X(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(U)return U;if(Y)return Y;if(D)return D;throw new Error("unexpected error. Unable to resolve global object.")},H=q(),J=H.document&&H.document.childNodes,K=Int8Array,Q=d,rr=J,er=K;var tr=function(){return"function"==typeof Q||"object"==typeof er||"function"==typeof rr};var nr=function(){return/^\s*function\s*([^(]*)/i},ir=nr;m(ir,"REGEXP",nr());var ar=ir,or=k;var ur=Array.isArray?Array.isArray:function(r){return"[object Array]"===or(r)};var cr=function(r){return null!==r&&"object"==typeof r};m(cr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!ur(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(cr));var fr=cr;var sr=k,lr=ar.REGEXP,vr=function(r){return fr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var pr=function(r){var e,t,n;if(("Object"===(t=sr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=lr.exec(n.toString()))return e[1]}return vr(r)?"Buffer":t},gr=pr;var mr=pr;var dr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?gr(r).toLowerCase():e},hr=function(r){return mr(r).toLowerCase()},br=tr()?hr:dr;var yr=function(r){return"function"===br(r)},wr=yr;var Er=function(r){var e=typeof r;return null!==r&&("object"===e||"function"===e)&&wr(r.next)};var jr=function(r){return"number"==typeof r},Pr=Number,_r=Pr.prototype.toString;var Or=k,Tr=Pr,Sr=function(r){try{return _r.call(r),!0}catch(r){return!1}},xr=y();var Vr=function(r){return"object"==typeof r&&(r instanceof Tr||(xr?Sr(r):"[object Number]"===Or(r)))},Ar=jr,kr=Vr;var Fr=m,Ir=function(r){return Ar(r)||kr(r)},Nr=Vr;Fr(Ir,"isPrimitive",jr),Fr(Ir,"isObject",Nr);var Mr=Ir,Rr=Number.POSITIVE_INFINITY,$r=Pr.NEGATIVE_INFINITY,Cr=Math.floor;var Br=function(r){return Cr(r)===r},Gr=Rr,Lr=$r,Zr=Br;var Wr=function(r){return r<Gr&&r>Lr&&Zr(r)},Xr=Mr.isPrimitive,zr=Wr;var Ur=function(r){return Xr(r)&&zr(r)},Yr=Mr.isObject,Dr=Wr;var qr=function(r){return Yr(r)&&Dr(r.valueOf())},Hr=Ur,Jr=qr;var Kr=m,Qr=function(r){return Hr(r)||Jr(r)},re=qr;Kr(Qr,"isPrimitive",Ur),Kr(Qr,"isObject",re);var ee=Qr,te=ee.isPrimitive;var ne=function(r){return te(r)&&r>0},ie=ee.isObject;var ae=function(r){return ie(r)&&r.valueOf()>0},oe=ne,ue=ae;var ce=m,fe=function(r){return oe(r)||ue(r)},se=ae;ce(fe,"isPrimitive",ne),ce(fe,"isObject",se);var le=fe,ve=_;var pe=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&ve(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var ge=function(r){return Math.abs(r)};var me=function(r){return r!=r},de=k,he="function"==typeof Float64Array;var be="function"==typeof Float64Array?Float64Array:null,ye=function(r){return he&&r instanceof Float64Array||"[object Float64Array]"===de(r)},we=be;var Ee,je="function"==typeof Float64Array?Float64Array:void 0,Pe=function(){throw new Error("not implemented")};Ee=function(){var r,e;if("function"!=typeof we)return!1;try{e=new we([1,3.14,-3.14,NaN]),r=ye(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?je:Pe;var _e=le.isPrimitive,Oe=me,Te=Ee;var Se=le.isPrimitive,xe=ge,Ve=function(r){var e,t,n,i;if(!_e(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=new Te(r),t=0,i=-1,n=0,function(a){var o;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%r,Oe(a))n=r,t=NaN;else if(n<r)n+=1,t+=a;else if(Oe(e[i])){for(n=1,t=a,o=0;o<r;o++)if(o!==i){if(Oe(e[o])){n=r,t=NaN;break}n+=1,t+=e[o]}}else!1===Oe(t)&&(t+=a-e[i]);return e[i]=a,t}};var Ae=function(r){var e;if(!Se(r))throw new TypeError("invalid argument. Must provide a positive integer. Value: `"+r+"`.");return e=Ve(r),function(r){if(0===arguments.length)return e();return e(xe(r))}};var ke=function(r){return"string"==typeof r},Fe=String.prototype.valueOf;var Ie=k,Ne=function(r){try{return Fe.call(r),!0}catch(r){return!1}},Me=y();var Re=function(r){return"object"==typeof r&&(r instanceof String||(Me?Ne(r):"[object String]"===Ie(r)))},$e=ke,Ce=Re;var Be=m,Ge=function(r){return $e(r)||Ce(r)},Le=Re;Be(Ge,"isPrimitive",ke),Be(Ge,"isObject",Le);var Ze=Ge,We=Br;var Xe=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&We(r.length)&&r.length>=0&&r.length<=9007199254740991},ze=Mr.isPrimitive,Ue=me;var Ye=function(r){return ze(r)&&Ue(r)},De=Mr.isObject,qe=me;var He=function(r){return De(r)&&qe(r.valueOf())},Je=Ye,Ke=He;var Qe=m,rt=function(r){return Je(r)||Ke(r)},et=He;Qe(rt,"isPrimitive",Ye),Qe(rt,"isObject",et);var tt=Xe,nt=ee.isPrimitive,it=Ze.isPrimitive,at=rt.isPrimitive;var ot=function(r,e,t){var n,i,a;if(!tt(r)&&!it(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!nt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(it(r)){if(!it(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,at(e)){for(a=i;a<n;a++)if(at(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},ut=Ze.isPrimitive;var ct=function(r){if(!ut(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ft=Ze.isPrimitive;var st=function(r){if(!ft(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},lt=ct,vt=st,pt=Ze.isPrimitive;var gt=function(r){return pt(r)&&r===vt(r)&&r!==lt(r)},mt=Rr,dt=$r;var ht=function(r){return r==r&&r>dt&&r<mt},bt=ee.isPrimitive;var yt=function(r){return bt(r)&&r>=0},wt=ee.isObject;var Et=function(r){return wt(r)&&r.valueOf()>=0},jt=yt,Pt=Et;var _t=m,Ot=function(r){return jt(r)||Pt(r)},Tt=Et;_t(Ot,"isPrimitive",yt),_t(Ot,"isObject",Tt);var St=Ot.isPrimitive,xt=Ze.isPrimitive;var Vt=function(r,e){var t,n;if(!xt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!St(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},At=ee.isPrimitive,kt=Ze.isPrimitive;var Ft=Vt,It=function(r,e,t){var n,i;if(!kt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!kt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!At(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var Nt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(It(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Ft("0",i):Ft("0",i)+r,n&&(r="-"+r)),r},Mt=gt,Rt=st,$t=ct,Ct=ht,Bt=Mr.isPrimitive,Gt=Nt;var Lt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Ct(n)){if(!Bt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Gt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Gt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Mt(r.specifier)?Rt(t):$t(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Zt=Ze.isPrimitive,Wt=/[-\/\\^$*+?.()|[\]{}]/g;var Xt=function(r){var e,t;if(!Zt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Wt,"\\$&"):(e=(e=r.substring(1,t)).replace(Wt,"\\$&"),r=r[0]+e+r.substring(t))},zt=RegExp.prototype.exec;var Ut=k,Yt=function(r){try{return zt.call(r),!0}catch(r){return!1}},Dt=y();var qt=Xt,Ht=yr,Jt=Ze.isPrimitive,Kt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Dt?Yt(r):"[object RegExp]"===Ut(r)))};var Qt=gt,rn=st,en=ct,tn=function(r,e,t){if(!Jt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Jt(e))e=qt(e),e=new RegExp(e,"g");else if(!Kt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Jt(t)&&!Ht(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},nn=ht,an=Mr.isPrimitive,on=ge,un=/e\+(\d)$/,cn=/e-(\d)$/,fn=/^(\d+)$/,sn=/^(\d+)e/,ln=/\.0$/,vn=/\.0*e/,pn=/(\..*[^0])0*e/;var gn=function(r){var e,t,n=parseFloat(r.arg);if(!nn(n)){if(!an(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":on(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=tn(t,pn,"$1e"),t=tn(t,vn,"e"),t=tn(t,ln,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=tn(t,un,"e+0$1"),t=tn(t,cn,"e-0$1"),r.alternate&&(t=tn(t,fn,"$1."),t=tn(t,sn,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Qt(r.specifier)?rn(t):en(t)},mn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var dn=Vt;var hn=Ze.isPrimitive,bn=ot,yn=me,wn=Lt,En=gn,jn=function(r){var e,t,n,i,a;for(e=0,n=[],a=mn.exec(r);a;)(t=r.slice(e,mn.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=mn.lastIndex,a=mn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Pn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+dn(" ",n):dn(" ",n)+r},_n=Nt,On=String.fromCharCode;var Tn=m,Sn=Er,xn=le.isPrimitive,Vn=yr,An=_,kn=pe,Fn=Ae,In=function(r){var e,t,n,i,a,o,u,c,f;if(!hn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=jn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],hn(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!bn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,yn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,yn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=wn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!yn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=yn(a)?String(n.arg):On(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=En(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=_n(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Pn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var Nn=function r(e,t){var n,i,a;if(!Sn(e))throw new TypeError(In("invalid argument. First argument must be an iterator. Value: `%s`.",e));if(!xn(t))throw new TypeError(In("invalid argument. Second argument must be a positive integer. Value: `%s`.",t));return a=Fn(t),Tn(n={},"next",(function(){var r,t;if(i)return{done:!0};r={},"number"==typeof(t=e.next()).value?r.value=a(t.value):An(t,"value")&&(r.value=a(NaN));t.done?(i=!0,r.done=!0):r.done=!1;return r})),Tn(n,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),kn&&Vn(e[kn])&&Tn(n,kn,(function(){return r(e[kn](),t)})),n},Mn=Nn;export{Mn as default};
//# sourceMappingURL=mod.js.map
